import { Exercise } from '../js/types/general.types';


export function renderExerciseCard(exercise: Exercise): string {
    return `
<li class="exercises-category-tile-item" data-id="${exercise._id}">
                  <div class="exercises-category-tile-top">
                    <div class="exercises-category-tile-top-wrapper">
                    <span class="exercises-category-tile-badge">WORKOUT</span>
                    <button class="exercises-category-tile-button-delete" aria-label="Remove from favorites" data-id="${exercise._id}">
                      <svg class="icon" width="20" height="20">
                        <use href="./img/sprite.svg#trash"></use>
                      </svg>
                    </button>
                    </div>
                    <div class="exercises-category-tile-top-wrapper">
                    <span class="exercises-category-tile-start">Start</span>
                    <button class="exercises-category-tile-button-start" aria-label="Start workout">
                      <svg class="icon" width="20" height="20">
                        <use href="./img/sprite.svg#arrow-right"></use>
                      </svg>
                    </button>
                    </div>

                  </div>
            
                  <div class="exercises-category-tile-middle">
                    <div class="exercises-category-tile-man-icon-container">
                      <svg class="exercises-category-tile-man-icon" width="24" height="24">
                        <use href="./img/sprite.svg#running"></use>
                      </svg>
                    </div>
                    <h3 class="exercise-name">${exercise.name}</h3>
                  </div>
            
                  <div class="exercises-category-tile-bottom">
                    <div class="exercises-category-tile-bottom-item">
                      <span class="exercises-category-tile-bottom-title">Burned calories:</span>
                      <span class="exercises-category-tile-bottom-value">${exercise.burnedCalories} / ${exercise.time} min</span>
                    </div>
                    <div class="exercises-category-tile-bottom-item">
                      <span class="exercises-category-tile-bottom-title">Body part:</span>
                      <span class="exercises-category-tile-bottom-value">${exercise.bodyPart}</span>
                    </div>
                    <div class="exercises-category-tile-bottom-item">
                      <span class="exercises-category-tile-bottom-title">Target:</span>
                      <span class="exercises-category-tile-bottom-value">${exercise.target}</span>
                    </div>
                  </div>
                </li>
    `;
}

 // Check isDesktop
 function isDesktop(): boolean {
    return window.innerWidth >= 1024;
}

function isTablet(): boolean {
    return window.innerWidth >= 768 && window.innerWidth < 1024;
  }
  

export function renderFavorites(data: Exercise[], container: HTMLElement): void {
    if (!data || data.length === 0) {
        container.innerHTML = `
        <p class="no-favorites">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites for easier access in the future.
        </p>
      `;
        return;
    }


    let itemsPerPage = 8;
    let currentPage = 1;
    let visibleItems: Exercise[];
    let totalPages = 1;

    if (isDesktop()) {
        visibleItems = data;
    } else {
        if (isTablet()) {
            itemsPerPage = 10;
        }
        totalPages = Math.ceil(data.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        visibleItems = data.slice(startIndex, endIndex);
    }

    const markup = visibleItems.map(renderExerciseCard).join('');
    if (isDesktop()) {
        container.innerHTML = `
            <div class="exercises-scroll-container">
                <ul class="exercises-list">${markup}</ul>
            </div>
        `;
    } else {
        container.innerHTML = `<ul class="exercises-list">${markup}</ul>`;
    }

    // Add pagination
    if (!isDesktop()) {
        const paginationContainer = document.createElement('div');
        paginationContainer.classList.add('pagination');
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.classList.add('pagination-btn');
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.textContent = i.toString();
            pageButton.dataset.page = i.toString();
            paginationContainer.appendChild(pageButton);
        }
        container.appendChild(paginationContainer);
    }
}