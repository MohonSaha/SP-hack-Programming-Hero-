const milestonesData = JSON.parse(data).data;

// load couse milestones data
function loadMilestones() {
    const milestones = document.querySelector('.milestones');

    milestones.innerHTML =` ${milestonesData.map(function(milestone){
        return ` <div class="milestone border-b" id="${milestone._id}">
        <div class="flex shadow border-1 border rounded p-2">
          <div class="checkbox"><input type="checkbox" onClick= "markMilestone(this, ${milestone._id})" /></div>
          <div onClick = "openMilestone(this, ${milestone._id})">
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>

          </div>

        </div>

        <div class="hidden_panel shadow border-1 border rounded p-2 mb-4">
          ${milestone.modules.map(function(module){
            return `<div class="module border-b">
            <p>${module.name}</p>
          </div>`;
          })
          .join(" ")}
          </div>
        </div>
      </div>`
    }).join(" ")}`;
}

function openMilestone(milestoneElement, id){
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
  const showPanel = document.querySelector(".show");

  const active = document.querySelector(".active");
  
  // first remove previous active class except the clicked one
if(active && !milestoneElement.classList.contains("active")){
  active.classList.remove("active");
}

// toggle current clicked one 
milestoneElement.classList.toggle("active");

// first hide previous panel if open except the clicked one
  if(!currentPanel.classList.contains("show") && showPanel)
    showPanel.classList.remove("show");
  
    // toggle current element
    currentPanel.classList.toggle('show');

    showMilestone(id)
}

function showMilestone(id){
  const milestoneImage = document.querySelector(".milestoneImage");
  const name = document.querySelector(".title");
  const details = document.querySelector(".details");

  milestoneImage.style.opacity = "0";
  milestoneImage.src = milestonesData[id].image;
  name.innerText = milestonesData[id].name;
  details.innerText = milestonesData[id].description;
}

// listen for milestone image load 
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function(){
  this.style.opacity = "1";
}

function markMilestone(checkbox, id){
  const doneList = document.querySelector(".doneList");
  const milestonesList = document.querySelector(".milestones");
  const item = document.getElementById(id);
  const done = document.querySelector(".done");
 
console.log(id);
 function queue(id){
    const previous = id + 1;
    return previous;
  }

//   console.log(id);
//  function queue(id){
//   const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   for (let num in number){
//     const previous = id + 1;
//   }
//     const previous = id + 1;
//     return previous;
//   }
  




  const previousElement = queue(id);
  const addHere = document.getElementById(previousElement);
  console.log(addHere);

  if(checkbox.checked){
    // done
    milestonesList.removeChild(item);
    doneList.appendChild(item);
  }
  else{
    // back to main list
    doneList.removeChild(item);
    // milestonesList.appendChild(item);
    milestonesList.insertBefore(item, addHere)
  }


}

loadMilestones();