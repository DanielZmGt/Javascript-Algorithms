export const getBookmarks = () => {
    const bookmarksString = localStorage.getItem('bookmarks');
    if (!bookmarksString) return [];

    try {
        const bookmarksArray = JSON.parse(bookmarksString);

        if (Array.isArray(bookmarksArray)) {
            const isValidArray = bookmarksArray.every(item =>
                item !== null &&
                typeof item === 'object' &&
                'name' in item &&
                'category' in item &&
                'url' in item
            );

            return isValidArray ? bookmarksArray : [];
        }

        return [];
    } catch (error) {
        return [];
    }
}

export const displayOrCloseForm = () => {
    document.getElementById('main-section').classList.toggle('hidden');
    document.getElementById('form-section').classList.toggle('hidden');
}

export const displayOrHideCategory = () => {
    document.getElementById('main-section').classList.toggle('hidden');
    document.getElementById('bookmark-list-section').classList.toggle('hidden');
}

document.getElementById('add-bookmark-button').addEventListener('click', () => {
    const category = document.getElementById('category-dropdown').value;
    document.querySelectorAll('.category-name').forEach(el => el.innerText = category);
    displayOrCloseForm();
});

document.getElementById('close-form-button').addEventListener('click', displayOrCloseForm);

document.getElementById('add-bookmark-button-form').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const url = document.getElementById('url').value;
    const category = document.getElementById('category-dropdown').value;

    const bookmarks = getBookmarks();
    bookmarks.push({ name, category, url });
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    document.getElementById('name').value = '';
    document.getElementById('url').value = '';
    displayOrCloseForm();
});

document.getElementById('view-category-button').addEventListener('click', () => {
    const category = document.getElementById('category-dropdown').value;
    document.querySelectorAll('.category-name').forEach(el => el.innerText = category);

    const bookmarks = getBookmarks();
    const filtered = bookmarks.filter(b => b.category === category);
    const listElement = document.getElementById('category-list');

    listElement.innerHTML = '';

    if (filtered.length === 0) {
        listElement.innerHTML = '<p>No Bookmarks Found</p>';
    } else {
        filtered.forEach(bookmark => {
            const div = document.createElement('div');
            div.innerHTML = `
        <input type="radio" id="${bookmark.name}" name="bookmark-radio" value="${bookmark.name}">
        <label for="${bookmark.name}">
          <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
        </label>
      `;
            listElement.appendChild(div);
        });
    }
    displayOrHideCategory();
});

document.getElementById('close-list-button').addEventListener('click', displayOrHideCategory);

document.getElementById('delete-bookmark-button').addEventListener('click', () => {
    const selectedRadio = document.querySelector('input[name="bookmark-radio"]:checked');
    if (!selectedRadio) return;

    const category = document.getElementById('category-dropdown').value;
    let bookmarks = getBookmarks();

    bookmarks = bookmarks.filter(b => !(b.name === selectedRadio.value && b.category === category));
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    document.getElementById('view-category-button').click();
});