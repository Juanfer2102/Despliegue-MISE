import React from 'react'



export const Progress = (porcentaje) => {

    console.log(porcentaje)
    let circularProgress = document.querySelector(".circular-progress"),
        progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,
        speed = 50;

    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#EE0004 ${progressStartValue * 3.6}deg, #ededed 0deg)`;
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
    return (
        <div class="container bg-greyBlack rounded-xl p-8">
            <p>Porcentaje de desarrollo</p>
            <div class="card border-white p-10 text-white flex flex-col gap-2">
                <p>No desarrollado</p>
                <div class="container">
                    <div class="circular-progress">
                        <span class="progress-value">0%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
