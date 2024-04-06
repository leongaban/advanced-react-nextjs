const BasicForm: React.FC = () => {
  async function fetchData(formData: any) {
    'use server';

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/photos'
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); // This will log the fetched data to the console
      return data;
      // You can manipulate the data or perform other actions here
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  return (
    <form action={fetchData}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;
