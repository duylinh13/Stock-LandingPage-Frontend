import Button from "../Button";
const MavenSupport = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8">
      <p className="mb-4 text-[32px] font-bold">
        All of this and much more dedicated from <br />
        <span className="text-blue-800">Maven</span> to your success
      </p>
      <Button
        label="Trade with Us Today"
        variant="primary"
        className="shadow-lg shadow-blue-500/50 transform translate-y-1"
      />
    </div>
  );
};

export default MavenSupport;
