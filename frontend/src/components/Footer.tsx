const Footer = () => {
  return (
    <div className="bg-blue-200 py-11">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-yellow-600 font-bold tracking-tight">
          MSA Holidays.com
        </span>
        <span className="text-yellow-600 font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
