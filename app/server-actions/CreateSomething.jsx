'use server'

export default async function CreateSomething (formData) {
  console.log('Process started, now pending...');

  // Function to delay execution
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  try {
    // Delay for 5 seconds
    await delay(5000);

    // Log the formData after delay
    console.log(formData);
  } catch (err) {
    console.log(err);
  }

  console.log('Process completed.');
}
