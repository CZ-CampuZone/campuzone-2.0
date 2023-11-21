import React from "react";
import "../components/component.css"

export const Map = () => {
  return (
    <>
      <div >
        <div class="m-4">
          <iframe
            
            class="gmap_iframe mapC"
            width="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=800&amp;hl=en&amp;q=anicha digital&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </>
  );
};
