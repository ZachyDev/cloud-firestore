export const Event = doc => {
    // return component
    const event = document.createElement("section");
  
    event.innerHTML = `
      <div class="event">
        <a href="${doc.data().rsvp}">
           <h2 class="title">${doc.data().title}
         </a>
          <p>${doc.data().description}
      </div>
    `;
  
    return event;
  };
  