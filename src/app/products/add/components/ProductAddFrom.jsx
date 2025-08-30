"use client";

export default  function ProductAddFrom() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const productName = from.productName.value;
    const payload = { productName };
    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-Type": "application/json",
      },
    });
    const result = await res.json();
  from.reset()
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border"
          name="productName"
          placeholder="product Name"
        />
        <button className="ml-2 rounded-xl bg-green-500 px-2" type="submit">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}
