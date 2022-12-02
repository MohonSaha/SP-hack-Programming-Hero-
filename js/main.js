const milestonesData = JSON.parse(data).data;

// load couse milestones data
function loadMilestones() {
    const milestones = document.querySelector('.milestones');

    milestones.innerHTML =` ${milestonesData.map(function(milestone){
        return ` <div class="milestone border-b">
        <div class="flex shadow border-1 border rounded p-2">
          <div class="checkbox"><input type="checkbox" /></div>
          <div onClick = "openMilestone(this)">
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

function openMilestone(milestoneElement){
    const currentPanel = milestoneElement.parentNode.nextElementSibling;

    currentPanel.classList.toggle('show')
}

loadMilestones();