<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- Removed dark mode detection script --}}

    {{-- Inline style to set the HTML background color for white mode --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }
    </style>

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    </script>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com",
      "logo": "https://yourdomain.com/logo.png",
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+1-800-555-1212",
        "contactType": "Customer Service"
      }]
    }
    </script>

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Your Website Title" />
    <meta property="og:description" content="A short description of your website or page." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourdomain.com/" />
    <meta property="og:image" content="https://yourdomain.com/path/to/your-image.jpg" />

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Your Website Title" />
    <meta name="twitter:description" content="A short description of your website or page." />
    <meta name="twitter:image" content="https://yourdomain.com/path/to/your-image.jpg" />
    <meta name="twitter:site" content="@YourTwitterHandle" />

    <link rel="canonical" href="https://yourdomain.com/" />
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
