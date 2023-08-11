document.addEventListener("DOMContentLoaded", () => {
    const reviews = [
        {
            text: "Excellent product! I'm very satisfied.",
            avatar: "https://images.unsplash.com/photo-1691525737402-e7a447ec2be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        },
        {
            text: "Fast shipping and great customer service.",
            avatar: "https://images.unsplash.com/photo-1691155056059-82a814c79240?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
        },
        {
            text: "The quality exceeded my expectations.",
            avatar: "https://plus.unsplash.com/premium_photo-1690489323622-6033f11bb1a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
        },
        {
            text: "I love it! Will definitely buy again.",
            avatar: "https://images.unsplash.com/photo-1690975243919-4aa73dc78c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
        },
        {
            text: "Highly recommended. 5 stars!",
            avatar: "https://images.unsplash.com/photo-1691502090078-d4d26c6decd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
        }
    ];

    const reviewText = document.getElementById("review-text");
    const avatarImage = document.querySelector(".avatar");
    const showReviewBtn = document.getElementById("btn");

    showReviewBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * reviews.length);
        reviewText.textContent = reviews[randomIndex].text;
        avatarImage.src = reviews[randomIndex].avatar;
    });
});