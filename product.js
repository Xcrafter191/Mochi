const products = [
  {
      name: "Strawberry Delight",
      image: "images/Strawberry.jpg",
      hoverImage: "images/strawberry-hover.png",
      rating: 4.3,
      price: 12.99,
      description: "Juicy strawberry filling wrapped in creamy yogurt mochi",
      details: "Contains real strawberry puree. 150 calories per piece.",
      flavor: "strawberry",
      reviews: [
        {
          user: "Emily R.",
          rating: 5,
          comment: "The strawberry flavor is so authentic! Love how the sweetness isn't overwhelming.",
        },
        { user: "David K.", rating: 4, comment: "Perfect summer treat. The yogurt filling is refreshing." },
      ],
    },
    {
      name: "Matcha Green Tea",
      image: "images/flavor_matcha.jpg",
      hoverImage: "images/matcha-hover.png",
      rating: 4.8,
      price: 14.99,
      description: "Premium matcha flavor with smooth yogurt filling",
      details: "Contains green tea extract. 140 calories per piece.",
      flavor: "matcha",
      reviews: [
        { user: "Akiko T.", rating: 5, comment: "Authentic matcha taste! Reminds me of Japanese desserts." },
        { user: "Michael L.", rating: 5, comment: "Perfect balance of matcha and yogurt. Not too sweet!" },
      ],
    },
    {
      name: "Mango Bliss",
      image: "images/flavor_mango.jpg",
      hoverImage: "images/mango-hover.png",
      rating: 3.7,
      price: 13.99,
      description: "Tropical mango filling in soft yogurt mochi",
      details: "Made with ripe mango pulp. 160 calories per piece.",
      flavor: "mango",
      reviews: [
        { user: "Sophie W.", rating: 5, comment: "Tastes like fresh mangoes! The tropical flavor is perfect." },
        { user: "James H.", rating: 4, comment: "Great summer flavor, very refreshing." },
      ],
    },
    {
      name: "Chocolate Dream",
      image: "images/flavor_chocolate.jpg",
      hoverImage: "images/flavor.jpg",
      rating: 4.6,
      price: 15.99,
      description: "Rich chocolate center with creamy yogurt coating",
      details: "Contains dark chocolate. 170 calories per piece.",
      flavor: "chocolate",
      reviews: [
        { user: "Maria C.", rating: 5, comment: "The chocolate filling is divine! Not too sweet, just perfect." },
        { user: "Tom B.", rating: 4, comment: "Great combination of chocolate and yogurt. Very unique!" },
      ],
    },
      { 
          name: "Blueberry Burst", 
          image: "images/flavor_blueberry.jpg", 
          hoverImage: "images/blueberry-hover.png",
          rating: 4.4,
          price: 12.99,
          description: "Bursting with blueberry goodness in every bite",
          details: "Sweet and tangy blueberry filling. 155 calories per piece.",
          flavor: "blueberry",
          reviews: [
        { user: "Sarah L.", rating: 5, comment: "The blueberry flavor explodes in your mouth! Perfect balance of sweet and tart." },
        { user: "Kevin M.", rating: 4, comment: "Love the burst of flavor, though I wish the mochi was slightly chewier." }
      ],
      },
      { 
          name: "Peach Paradise", 
          image: "images/flavor_peach.jpg", 
          hoverImage: "images/flavor_peach_hover.jpg",
          rating: 4.1,
          price: 13.49,
          description: "Juicy peach flavor encased in soft yogurt mochi",
          details: "Made with fresh peach juice. 150 calories per piece.",
          flavor: "peach",
          reviews: [
        { user: "Michael T.", rating: 4, comment: "Tastes like summer in a bite! The peach flavor is wonderfully authentic." }
      ]
      },
      { 
          name: "Raspberry Ripple", 
          image: "images/flavor_raspberry.jpg", 
          hoverImage: "images/raspberry-hover.png",
          rating: 4.5,
          price: 12.99,
          description: "Tangy raspberry filling with a creamy yogurt twist",
          details: "Naturally sweetened with raspberry puree. 145 calories per piece.",
          flavor: "raspberry",
          reviews: [
        { user: "Jessica M.", rating: 5, comment: "Perfect blend of tart raspberry and creamy yogurt. My new favorite!" }
      ]
      },
      { 
          name: "Lemon Zest", 
          image: "images/flavor_lemon.jpg", 
          hoverImage: "images/flavor_lemon_hover.jpg",
          rating: 4.7,
          price: 11.99,
          description: "Zesty lemon filling in a chewy yogurt mochi shell",
          details: "Citrusy and refreshing. 130 calories per piece.",
          flavor: "lemon",
          reviews: [
        { user: "Olivia P.", rating: 5, comment: "Zingy and refreshing! The lemon flavor really wakes up your taste buds." }
      ]
      },
      { 
          name: "Coconut Cream", 
          image: "images/flavor_coconut.jpg", 
          hoverImage: "images/coconut-hover.png",
          rating: 3.8,
          price: 14.49,
          description: "Creamy coconut filling wrapped in yogurt mochi",
          details: "Made with real coconut milk. 165 calories per piece.",
          flavor: "coconut",
          reviews: [
        { user: "Daniel H.", rating: 3, comment: "Good coconut flavor but a bit too rich for my taste. Texture is excellent though." }
      ]
      },
      { 
          name: "Vanilla Bean", 
          image: "images/flavor_vanilla.jpg", 
          hoverImage: "images/vanilla-hover.png",
          rating: 4.5,
          price: 12.99,
          description: "Classic vanilla bean flavor with a yogurt twist",
          details: "Infused with real vanilla beans. 140 calories per piece.",
          flavor: "vanilla",
          reviews: [
        { user: "Sophia G.", rating: 5, comment: "Classic done right! You can actually see the vanilla bean specks - fantastic quality." }
      ]
      },
      { 
          name: "Pistachio Pleasure", 
          image: "images/flavor_pistachio.jpg", 
          hoverImage: "images/pistachio-hover.png",
          rating: 4,
          price: 16.99,
          description: "Nutty pistachio filling in a creamy yogurt mochi",
          details: "Made with roasted pistachios. 180 calories per piece.",
          flavor: "pistachio",
          reviews: [
        { user: "Emma W.", rating: 4, comment: "Unique nutty flavor! Pricey but worth it for an occasional treat." }
      ]
      },
      { 
          name: "Black Sesame Bliss", 
          image: "images/flavor_black_sesame.jpg", 
          hoverImage: "images/black-sesame-hover.png",
          rating: 4.2,
          price: 13.99,
          description: "Earthy black sesame flavor with a yogurt coating",
          details: "Rich in antioxidants. 150 calories per piece.",
          flavor: "black sesame",
          reviews: [
        { user: "Alex C.", rating: 4, comment: "Earthy and intriguing! Not for everyone but I personally love it." }
      ]
      },
      { 
          name: "Passion Fruit Punch", 
          image: "images/flavor_fruit.jpg", 
          hoverImage: "images/flavor_fruit_hover.jpg",
          rating: 4.5,
          price: 14.99,
          description: "Exotic passion fruit filling in a chewy yogurt mochi",
          details: "Tangy and sweet. 155 calories per piece.",
          flavor: "passion fruit",
          reviews: [
        { user: "Ryan S.", rating: 5, comment: "Tropical paradise in every bite! The tanginess is absolutely perfect." }
      ]
      },
      { 
          name: "Lychee Love", 
          image: "images/flavor_lychee.jpg", 
          hoverImage: "images/lychee-hover.png",
          rating: 4.6,
          price: 13.99,
          description: "Delicate lychee flavor wrapped in creamy yogurt mochi",
          details: "Made with natural lychee extract. 145 calories per piece.",
          flavor: "lychee",
          reviews: [
        { user: "Lila M.", rating: 5, comment: "Delicate and floral - transports me right back to my trip to Southeast Asia!" }
      ]
      },
      { 
          name: "Durian Delight", 
          image: "images/flavor_durian.jpg", 
          hoverImage: "images/durian-hover.png",
          rating: 3.1,
          price: 21,
          description: "Bold durian flavor for adventurous taste buds",
          details: "Made with premium durian fruit. 190 calories per piece.",
          flavor: "durian",
          reviews: [
        { user: "Jake R.", rating: 2, comment: "The durian is... intense. Not my cup of tea but my adventurous friend loved it." }
      ]
      },
      { 
          name: "Green Apple Crunch", 
          image: "images/flavor_apple.jpg", 
          hoverImage: "images/green-apple-hover.png",
          rating: 4.5,
          price: 12.99,
          description: "Crisp green apple filling in a soft yogurt mochi",
          details: "Tart and refreshing. 135 calories per piece.",
          flavor: "green apple",
          reviews: [
        { user: "Hannah F.", rating: 5, comment: "Crisp and refreshing! The tartness cuts through the sweetness perfectly." }
      ]
      }
  ];