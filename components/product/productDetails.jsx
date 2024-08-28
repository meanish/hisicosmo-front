export const ProductDetails = () => {
  return (
    <div className="container w-full bg-white px-8 py-4 grid gap-9 pb-36 rounded-b-lg">
      <div className="product-details grid gap-8">
        <h3 className="text-2xl font-bold leading-tight">Product Details</h3>
        <ul className="list-disc pl-6 flex flex-col gap-5">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus corrupti vero quos molestias quod laborum, ducimus
            facere quae esse blanditiis saepe cumque aspernatur, nulla tenetur
            tempora ad sequi ut repudiandae, eaque error sed. Natus, nulla
            dolorum assumenda quibusdam commodi explicabo fugiat iste
            exercitationem cumque saepe, deserunt beatae necessitatibus a
            minima. Quidem hic, animi aspernatur laborum dignissimos ad
            voluptate quisquam at.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            nihil possimus voluptas dolorem non sed ea aut fuga molestiae,
            officiis saepe illo. Molestias et eius obcaecati, ad minima quidem
            nostrum!
          </li>
        </ul>
      </div>
      <div className="key-benefits grid gap-8">
        <h3 className="text-2xl font-bold leading-tight">Key Details</h3>
        <ul className="grid gap-2 list-disc pl-6">
          {Array(6)
            .fill(null)
            .map((item, index) => {
              return (
                <li key={index}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
