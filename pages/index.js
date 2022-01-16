import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Moscow",
    image: "https://cdn.britannica.com/26/116526-050-76C37BBC/Cathedral-of-St-Basil-the-Blessed-Moscow.jpg",
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

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
