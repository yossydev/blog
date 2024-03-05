import { createRoute } from "honox/factory";
import Share from "../../islands/share";

export default createRoute((c) => {
  return c.render(
    <div>
      <h1>Hello</h1>
    </div>,
    {},
  );
});
