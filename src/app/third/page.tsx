import ThirdCompoent from '@/components/clients/third-component';

const ThirdPage = () => {
  return (
    <div>
      <h1>Third</h1>
      <p>Contains client component, which imports server component</p>
      <ThirdCompoent />
    </div>
  );
};

export default ThirdPage;
