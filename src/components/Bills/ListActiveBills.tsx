import React from "react";

function ListActiveBills() {
  return (
    <div className="flex items-stretch justify-between border border-medium/40 p-3">
      <div>
        <div>
          <p className="font-semibold">This is the title</p>
          <p className="text-sm text-medium">
            This is the description of the bill that was created.
          </p>
        </div>
      </div>
      <div>
        <p className="text-sm">Realised</p>
        <p className="text-primary font-bold">$3,000</p>
      </div>
    </div>
  );
}

export default ListActiveBills;
