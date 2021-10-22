import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import TaskList from '../components/TasksList.js';
import Footer from '../components/Footer';
const Index = ({ tasks }) => {
  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header />
      <Hero />
      <Feature />
      <Service />
      <TaskList tasks={tasks} />
      <About />
      <Footer />
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://api-softwareland-sigma.vercel.app/tasks');
  const tasks = await res.json();
  return { props: { tasks } };
}
export default Index;
