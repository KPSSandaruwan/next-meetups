import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Moscow",
    image:
      "https://cdn.britannica.com/26/116526-050-76C37BBC/Cathedral-of-St-Basil-the-Blessed-Moscow.jpg",
    address: "Red Square, Moscow.",
    description: "Kremlin",
  },
  {
    id: "m2",
    title: "Moscow",
    image:
      "https://cdn.britannica.com/26/116526-050-76C37BBC/Cathedral-of-St-Basil-the-Blessed-Moscow.jpg",
    address: "Red Square, Moscow.",
    description: "Kremlin",
  },
  {
    id: "m3",
    title: "Moscow",
    image:
      "https://cdn.britannica.com/26/116526-050-76C37BBC/Cathedral-of-St-Basil-the-Blessed-Moscow.jpg",
    address: "Red Square, Moscow.",
    description: "Kremlin",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// This is a function to call all the props before it is render, otherwise all the list wil not render for the first time.
// This code will not run in the client side
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

// Revalidate every incoming request
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
