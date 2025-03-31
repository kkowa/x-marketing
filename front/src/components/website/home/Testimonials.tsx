import Header from "@/components/ui/Header";

const Testimonials = () => {
  return (
    <div className="mt-12">
      <Header
        title="Our Product"
        description={
          <>
            help you to build website company that is modern, user friendly
            <br />
            good CEO, and Clean design
          </>
        }
        buttonContainer={false}
      />
    </div>
  );
};

export default Testimonials;
