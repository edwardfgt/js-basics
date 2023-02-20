const uppercaseMessage = (message) => {
  return message.toUpperCase();
}

const lowercaseMessage = (message) => {
  return message.toLowerCase();
}

const messageLength = (message) => {
  return message.length;
}

// This function accepts as arguments a string message, and a function.
// It then calls the given function to do its job.
const transform = (message, transformFunction) => {
  return transformFunction(message);
}

const notifyByEmail = (email) => {
  return `Email sent to ${email}`;
}

const notifyByText = (number) => {
  return `Text sent to ${number}`;
}

const notify = (contact, transformFunction) => {
  return transformFunction(contact);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+1000000', notifyByText));

