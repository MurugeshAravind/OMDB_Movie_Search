import { TailSpin } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <TailSpin height="80" width="80" color="grey" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
