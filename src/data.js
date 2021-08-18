import useFetch from './helper';

function getAllGuides() {
    const guides = useFetch('/wp-json/wp/v2/guides');
    console.log('fetching data..');
  return (
    <ul component="nav" aria-label="main mailbox folders">
        {guides && guides.map((guide, index) => (
        <li key={index}>
          {guide.title.rendered}
        </li>
        ))}
    </ul>
  );
}

export default getAllGuides;