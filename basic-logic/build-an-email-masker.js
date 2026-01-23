
let email = ("apple.pie@example.com")

function maskEmail(email) {
  const [local, domain] = email.split("@");

  if (local.length <= 2) return email;

  const start = local[0];
  const end = local[local.length - 1];
  const middle = "*".repeat(local.length - 2);

  return `${start}${middle}${end}@${domain}`;
}

console.log(maskEmail(email))


