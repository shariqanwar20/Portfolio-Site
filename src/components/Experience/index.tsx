import React from "react";
import { IoIosPeople } from "react-icons/io";
import Card from "./Card";

export default () => {
  return (
    <div className="bg-secondaryBg flex flex-col items-center px-40 md:grid md:grid-cols-2 lg:grid-cols-4 py-20">
      <Card
        icon={<IoIosPeople className="w-20 h-20 mx-auto" style={{ color: "white" }} />}
        value={47}
        title="Clients"
      />
      <Card
        icon={<IoIosPeople className="w-20 h-20 mx-auto" style={{ color: "white" }} />}
        value={47}
        title="Clients"
      />
      <Card
        icon={<IoIosPeople className="w-20 h-20 mx-auto" style={{ color: "white" }} />}
        value={47}
        title="Clients"
      />
      <Card
        icon={<IoIosPeople className="w-20 h-20 mx-auto" style={{ color: "white" }} />}
        value={47}
        title="Clients"
      />
    </div>
  );
};
