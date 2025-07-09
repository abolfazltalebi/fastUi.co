export default function Subscribe() {
  return (
    <div className="item2 space-y-5">
      <h2 className="text-xl font-bold">Join our weekly digest</h2>
      <p>Get exclusive promotions & updates straight to your inbox.</p>
      <div className="flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Enter your email here"
          className="w-full px-2 py-4 rounded-xl"
        />
        <button className="button w-full md:w-auto text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
}
