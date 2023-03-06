export default function NavBar() {
  return (
    <div className='w-full flex justify-between items-center'>
      <div>
        <h1 className='text-white font-bold text-lg italic'>Strawrage</h1>
      </div>
      <div>
        <ul className='text-white flex gap-x-12'>
          <li>Home</li>
          <li>Product</li>
          <li className='font-bold'>Pricing</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <button className='bg-dark-blue rounded-md w-24 h-10 text-white'>
        Sign Up
      </button>
    </div>
  );
}
