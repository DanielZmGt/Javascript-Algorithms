const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" },
};

class ProjectIdea {
  constructor(title, description, id = null, status = projectStatus.PENDING) {
    this.id = id || `idea-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    this.title = title;
    this.description = description;
    this.status = status;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }
  pin(idea) {
    this.ideas.push(idea);
  }
  unpin(idea) {
    const index = this.ideas.indexOf(idea);
    if (index !== -1) {
      this.ideas.splice(index, 1);
    }
  }

  count() {
    let result = this.ideas.length;
    if (result < 1) {
      return 0;
    }
    return result;
  }

  formatToString() {
    let result = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach((idea) => {
      result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    });
    return result;
  }
}

// UI Application Logic
const board = new ProjectIdeaBoard("My Awesome Board");

// DOM Elements
const elements = {
  addBtn: document.getElementById("addIdeaBtn"),
  modal: document.getElementById("ideaModal"),
  cancelBtn: document.getElementById("cancelBtn"),
  form: document.getElementById("ideaForm"),
  titleInput: document.getElementById("ideaTitle"),
  descInput: document.getElementById("ideaDescription"),
  columns: document.querySelectorAll(".column-content"),
  counters: {
    PENDING: document.getElementById("count-pending"),
    SUCCESS: document.getElementById("count-success"),
    FAILURE: document.getElementById("count-failure"),
  },
  lists: {
    PENDING: document.getElementById("list-pending"),
    SUCCESS: document.getElementById("list-success"),
    FAILURE: document.getElementById("list-failure"),
  },
};

// Initial Load
function loadData() {
  const saved = localStorage.getItem("projectBoardData");
  if (saved) {
    try {
      const data = JSON.parse(saved);
      data.forEach((item) => {
        // Find matching status object
        let statusObj = projectStatus.PENDING;
        if (item.status === "SUCCESS") statusObj = projectStatus.SUCCESS;
        if (item.status === "FAILURE") statusObj = projectStatus.FAILURE;

        const idea = new ProjectIdea(
          item.title,
          item.description,
          item.id,
          statusObj,
        );
        board.pin(idea);
      });
    } catch (e) {
      console.error("Failed to parse board data", e);
    }
  }
  renderBoard();
}

function saveData() {
  const dataToSave = board.ideas.map((idea) => ({
    id: idea.id,
    title: idea.title,
    description: idea.description,
    status:
      Object.keys(projectStatus).find(
        (key) => projectStatus[key] === idea.status,
      ) || "PENDING",
  }));
  localStorage.setItem("projectBoardData", JSON.stringify(dataToSave));
}

// Render logic
function renderBoard() {
  // Clear all lists
  Object.values(elements.lists).forEach((list) => (list.innerHTML = ""));

  // Reset counters
  let counts = { PENDING: 0, SUCCESS: 0, FAILURE: 0 };

  board.ideas.forEach((idea) => {
    // Determine status key
    const statusKey =
      Object.keys(projectStatus).find(
        (key) => projectStatus[key] === idea.status,
      ) || "PENDING";

    counts[statusKey]++;

    const card = document.createElement("div");
    card.className = "idea-card";
    card.setAttribute("data-status", statusKey);
    card.setAttribute("draggable", "true");
    card.setAttribute("data-id", idea.id);

    card.innerHTML = `
            <h3 class="idea-title">${escapeHTML(idea.title)}</h3>
            <p class="idea-desc">${escapeHTML(idea.description)}</p>
            <button class="delete-btn" aria-label="Delete idea">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"></path>
                </svg>
            </button>
        `;

    // Event Listeners for Card
    card.addEventListener("dragstart", handleDragStart);
    card.addEventListener("dragend", handleDragEnd);

    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      board.unpin(idea);
      saveData();
      renderBoard();
    });

    if (elements.lists[statusKey]) {
      elements.lists[statusKey].appendChild(card);
    }
  });

  // Update counters
  elements.counters.PENDING.textContent = counts.PENDING;
  elements.counters.SUCCESS.textContent = counts.SUCCESS;
  elements.counters.FAILURE.textContent = counts.FAILURE;
}

// Drag & Drop Handlers
let draggedIdeaId = null;

function handleDragStart(e) {
  draggedIdeaId = this.getAttribute("data-id");
  e.dataTransfer.effectAllowed = "move";
  setTimeout(() => this.classList.add("dragging"), 0);
}

function handleDragEnd() {
  this.classList.remove("dragging");
  draggedIdeaId = null;
  elements.columns.forEach((col) => col.classList.remove("drag-over"));
}

elements.columns.forEach((column) => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    column.classList.add("drag-over");
  });

  column.addEventListener("dragleave", () => {
    column.classList.remove("drag-over");
  });

  column.addEventListener("drop", (e) => {
    e.preventDefault();
    column.classList.remove("drag-over");

    if (!draggedIdeaId) return;

    const parentColumn = column.closest(".column");
    const newStatusKey = parentColumn.getAttribute("data-status");

    const idea = board.ideas.find((i) => i.id === draggedIdeaId);
    if (idea && projectStatus[newStatusKey]) {
      idea.updateProjectStatus(projectStatus[newStatusKey]);
      saveData();
      renderBoard();
    }
  });
});

// Modal Actions
elements.addBtn.addEventListener("click", () => {
  elements.modal.classList.remove("hidden");
  elements.titleInput.focus();
});

elements.cancelBtn.addEventListener("click", () => {
  elements.modal.classList.add("hidden");
  elements.form.reset();
});

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = elements.titleInput.value.trim();
  const desc = elements.descInput.value.trim();

  if (title && desc) {
    const newIdea = new ProjectIdea(title, desc);
    board.pin(newIdea);
    saveData();
    renderBoard();

    elements.modal.classList.add("hidden");
    elements.form.reset();
  }
});

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// Init
document.addEventListener("DOMContentLoaded", loadData);
