<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NBA.wear | Premium Hoodies & Streetwear</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', 'Helvetica Neue', sans-serif;
        }
        
        :root {
            --black: #0a0a0a;
            --dark: #1a1a1a;
            --gray: #8a8a8a;
            --light: #f5f5f5;
            --white: #ffffff;
            --accent: #c89b3c;
            --beige: #e6dfd5;
            --transition: all 0.3s ease;
        }
        
        body {
            background-color: var(--white);
            color: var(--black);
            line-height: 1.6;
        }
        
        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        /* Typography */
        h1, h2, h3, h4 {
            font-weight: 600;
            line-height: 1.2;
        }
        
        h1 {
            font-size: 3.5rem;
            letter-spacing: -0.5px;
        }
        
        h2 {
            font-size: 2.5rem;
        }
        
        h3 {
            font-size: 1.75rem;
        }
        
        .text-lead {
            font-size: 1.25rem;
            color: var(--gray);
        }
        
        /* Buttons */
        .btn {
            display: inline-block;
            padding: 1rem 2rem;
            border: none;
            border-radius: 0;
            text-transform: uppercase;
            font-weight: 500;
            letter-spacing: 1px;
            cursor: pointer;
            transition: var(--transition);
            text-decoration: none;
        }
        
        .btn-primary {
            background-color: var(--black);
            color: var(--white);
        }
        
        .btn-primary:hover {
            background-color: var(--accent);
        }
        
        .btn-secondary {
            background-color: transparent;
            color: var(--black);
            border: 1px solid var(--black);
        }
        
        .btn-secondary:hover {
            background-color: var(--black);
            color: var(--white);
        }
        
        /* Header */
        header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background-color: var(--white);
            z-index: 100;
            padding: 1.5rem 0;
            border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        
        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            text-decoration: none;
            color: var(--black);
        }
        
        nav ul {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        nav a {
            text-decoration: none;
            color: var(--black);
            font-weight: 500;
            transition: var(--transition);
        }
        
        nav a:hover {
            color: var(--accent);
        }
        
        .header-actions {
            display: flex;
            gap: 1.5rem;
        }
        
        .header-actions i {
            font-size: 1.2rem;
            cursor: pointer;
        }
        
        /* Hero Section */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1687&q=80') no-repeat center center/cover;
            color: var(--white);
            margin-top: 80px;
        }
        
        .hero-content {
            max-width: 600px;
        }
        
        .hero-buttons {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        /* Featured Products */
        .section-title {
            text-align: center;
            margin: 5rem 0 3rem;
        }
        
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
            margin-bottom: 5rem;
        }
        
        .product-card {
            background: var(--white);
            transition: var(--transition);
        }
        
        .product-card:hover {
            transform: translateY(-5px);
        }
        
        .product-image {
            height: 350px;
            background-color: var(--beige);
            margin-bottom: 1rem;
            overflow: hidden;
        }
        
        .product-info {
            padding: 0 0.5rem;
        }
        
        .product-title {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
        }
        
        .product-price {
            font-weight: 500;
        }
        
        /* Lookbook Section */
        .lookbook {
            background-color: var(--light);
            padding: 5rem 0;
        }
        
        .lookbook-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
        }
        
        .lookbook-item {
            height: 500px;
            background-color: var(--beige);
        }
        
        /* Testimonials */
        .testimonials {
            padding: 5rem 0;
        }
        
        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }
        
        .testimonial-card {
            padding: 2rem;
            background-color: var(--light);
        }
        
        .testimonial-text {
            font-style: italic;
            margin-bottom: 1.5rem;
        }
        
        .testimonial-author {
            font-weight: 500;
        }
        
        /* Newsletter */
        .newsletter {
            background-color: var(--black);
            color: var(--white);
            padding: 5rem 0;
            text-align: center;
        }
        
        .newsletter-form {
            max-width: 500px;
            margin: 2rem auto 0;
            display: flex;
        }
        
        .newsletter-input {
            flex: 1;
            padding: 1rem;
            border: none;
        }
        
        .newsletter-btn {
            background-color: var(--accent);
            color: var(--black);
            border: none;
            padding: 0 1.5rem;
            cursor: pointer;
            font-weight: 500;
        }
        
        /* Footer */
        footer {
            background-color: var(--dark);
            color: var(--white);
            padding: 5rem 0 2rem;
        }
        
        .footer-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 3rem;
        }
        
        .footer-heading {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            color: var(--white);
        }
        
        .footer-links {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 0.75rem;
        }
        
        .footer-links a {
            color: var(--gray);
            text-decoration: none;
            transition: var(--transition);
        }
        
        .footer-links a:hover {
            color: var(--accent);
        }
        
        .social-icons {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }
        
        .social-icons a {
            color: var(--white);
            font-size: 1.2rem;
        }
        
        .copyright {
            text-align: center;
            margin-top: 5rem;
            color: var(--gray);
            font-size: 0.9rem;
        }
        
        /* Responsive */
        @media (max-width: 992px) {
            .lookbook-grid,
            .testimonials-grid,
            .footer-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            h1 {
                font-size: 2.8rem;
            }
        }
        
        @media (max-width: 768px) {
            .hero-buttons {
                flex-direction: column;
            }
            
            .products-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            nav ul {
                gap: 1rem;
            }
        }
        
        @media (max-width: 576px) {
            .lookbook-grid,
            .testimonials-grid,
            .footer-grid,
            .products-grid {
                grid-template-columns: 1fr;
            }
            
            .header-container {
                flex-direction: column;
                gap: 1rem;
            }
            
            h1 {
                font-size: 2.2rem;
            }
            
            h2 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container header-container">
            <a href="#" class="logo">NBA.wear</a>
            
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Collection</a></li>
                    <li><a href="#">Lookbook</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            
            <div class="header-actions">
                <i class="fas fa-search"></i>
                <i class="fas fa-shopping-bag"></i>
                <i class="fas fa-user"></i>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Elevate Your Style with Premium Hoodies</h1>
                <p class="text-lead">Discover the perfect blend of comfort and streetwear luxury with our limited edition collections.</p>
                <div class="hero-buttons">
                    <a href="#" class="btn btn-primary">Shop Now</a>
                    <a href="#" class="btn btn-secondary">View Collection</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Products -->
    <section class="container">
        <div class="section-title">
            <h2>Featured Hoodies</h2>
            <p class="text-lead">Limited drops with premium quality and design</p>
        </div>
        
        <div class="products-grid">
            <div class="product-card">
                <div class="product-image"></div>
                <div class="product-info">
                    <h3 class="product-title">Essentials Hoodie - Forest Green</h3>
                    <p class="product-price">$120.00</p>
                </div>
            </div>
            
            <div class="product-card">
                <div class="product-image"></div>
                <div class="product-info">
                    <h3 class="product-title">Premium Hoodie - Midnight Black</h3>
                    <p class="product-price">$125.00</p>
                </div>
            </div>
            
            <div class="product-card">
                <div class="product-image"></div>
                <div class="product-info">
                    <h3 class="product-title">Signature Hoodie - Desert Beige</h3>
                    <p class="product-price">$135.00</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Lookbook Section -->
    <section class="lookbook">
        <div class="container">
            <div class="section-title">
                <h2>Urban Lifestyle</h2>
                <p class="text-lead">Inspired looks from the streets</p>
            </div>
            
            <div class="lookbook-grid">
                <div class="lookbook-item"></div>
                <div class="lookbook-item"></div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials container">
        <div class="section-title">
            <h2>What Our Customers Say</h2>
            <p class="text-lead">Authentic reviews from the NBA.wear community</p>
        </div>
        
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <p class="testimonial-text">"The quality of these hoodies is unmatched. The fabric is premium and the fit is perfect."</p>
                <p class="testimonial-author">- Alex M.</p>
            </div>
            
            <div class="testimonial-card">
                <p class="testimonial-text">"I've never owned a more comfortable hoodie. The attention to detail is incredible."</p>
                <p class="testimonial-author">- Sarah J.</p>
            </div>
            
            <div class="testimonial-card">
                <p class="testimonial-text">"The minimal design and premium feel make this my go-to hoodie for any occasion."</p>
                <p class="testimonial-author">- Michael T.</p>
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="newsletter">
        <div class="container">
            <h2>Join the NBA.wear Community</h2>
            <p class="text-lead">Subscribe to get exclusive offers and early access to new drops</p>
            
            <form class="newsletter-form">
                <input type="email" class="newsletter-input" placeholder="Your email address">
                <button type="submit" class="newsletter-btn">Subscribe</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div>
                    <h3 class="footer-heading">NBA.wear</h3>
                    <p>Premium streetwear designed for urban lifestyles. Crafted with attention to detail and quality materials.</p>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-tiktok"></i></a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Shop</h3>
                    <ul class="footer-links">
                        <li><a href="#">All Products</a></li>
                        <li><a href="#">Hoodies</a></li>
                        <li><a href="#">T-Shirts</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">New Arrivals</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="footer-heading">Support</h3>
                    <ul class="footer-links">
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Shipping & Returns</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="footer-heading">Contact</h3>
                    <ul class="footer-links">
                        <li>Email: info@nba.wear</li>
                        <li>Phone: +1 (234) 567-8900</li>
                        <li>Hours: Mon-Fri, 9AM-5PM EST</li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2023 NBA.wear. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Simple JavaScript for demonstration purposes
        document.addEventListener('DOMContentLoaded', function() {
            // Highlight current page in navigation
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('nav a');
            
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPage) {
                    link.style.color = 'var(--accent)';
                }
            });
            
            // Add to cart animation
            const cartIcons = document.querySelectorAll('.fa-shopping-bag');
            cartIcons.forEach(icon => {
                icon.addEventListener('click', function(e) {
                    e.preventDefault();
                    alert('Product added to cart!');
                });
            });
        });
    </script>
</body>
</html>
