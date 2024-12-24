import React from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../pages/Footer";
import Menu from "../menu/Menu";

const Blog = () => {
  const navigate = useNavigate();

  const mainArticle = {
    title: "Unlock Your Business Potential with Top-Notch Digital Marketing Services: Best IT Company in Calicut",
    category: "IT Software",
    img: "https://evolvemedia.com/wp-content/uploads/2020/01/blog-1.jpg",
    description:
      "In today's digital-first world, businesses need more than just traditional marketing strategies to stay competitive...",
    content: [
      {
        heading: "Why Digital Marketing is Essential for Your Business",
        body: "The growth of social media, mobile devices, and online shopping has changed the way businesses connect with their customers. Traditional marketing methods no longer have the same impact, and in a city like Calicut, standing out in a crowded market requires a modern, data-driven approach.With the use of digital marketing, companies can now more precisely target customers, optimise campaigns in real time, and track outcomes. Digital marketing may help you accomplish your objectives, whether they aim to raise brand awareness, increase traffic, or enhance consumer engagement.",
      },
      {
        heading: "Our Digital Marketing Services at Auxxweb Solutions",
        body: "The broad range of digital marketing services at Auxxweb Solutions are designed to meet the needs of companies in Calicut and beyond. As a Best IT company In Calicut ,our team handles each project with technical expertise and creative ideas.",
        points: [
          "1. Search Engine Optimization (SEO): For any business, it is essential to be listed on the top page of Google search results. Our SEO specialists optimise your website for relevant keywords, provide excellent content, and make sure technical SEO components are up to standard in order to increase its visibility. Higher rankings and organic traffic are the result.",
          "2. Pay-Per-Click (PPC) Advertising: In today’s competitive digital landscape, simply having a great website isn’t enough to drive the right kind of traffic to your business. If you want quick, measurable results, Pay-Per-Click (PPC) Advertising is the way to go. At Auxxweb Solutions, the Best IT Company in Calicut, we specialize in creating tailored PPC campaigns that not only bring immediate traffic to your site but also deliver a high return on investment (ROI).As the Best IT Company in Calicut, we take a comprehensive approach to PPC advertising that guarantees your campaigns perform at their best. ",
          "3. Social Media Marketing (SMM): In today’s digital age, social media is not just a platform for socializing; it’s a powerful tool for business growth.With billions of users on social media sites like Facebook, Instagram, and LinkedIn, there is a huge opportunity to interact with your audience, increase brand recognition, and boost conversions. The best IT company in Calicut, Auxxweb Solutions, specialises in creating customised social media marketing plans that support the online success of your company.",
          "4. Content Marketing :Content is king in the digital marketing world. At Auxxweb Solutions, we create high-quality, engaging humanized content that speaks to your target audience. One of the most effective strategies for increasing traffic, establishing brand authority, and cultivating client loyalty in the realm of digital marketing is content marketing. The best IT company in Calicut, Auxxweb Solutions, is a firm believer in the ability of skilfully written content to draw in, hold on to, and convert your target audience. Whether you're producing blogs, or articles, our content marketing techniques are made to help your company succeed in the long term.",
          "5. UI/UX Design : Today's fast-paced digital world makes having an excellent User Experience (UX) even more crucial. It is the foundation of any effective digital advertising campaign.The best IT Company in calicut  Auxxweb Solutions, We understand that having a stunning website or app is only the first step. The way your users feel when using it is what matters best. In this situation, our UI/UX design services are useful.",
          "6. App Promotion : Promoting your app online is essential given the increasing popularity of mobile apps. To ensure that the proper people see their software, we assist developers in making it more visible on marketplaces like Google Play and the Apple software Store. In order to increase app downloads and user retention, our techniques integrate social media, paid marketing, and SEO."   
        ],
      },
      {
        heading: "How We Stand Out as the Best IT Company in Calicut",
        body: "At Auxxweb Solutions, we believe that providing services isn't enough to achieve success; we also think that providing outcomes that actually have an impact is crucial. Our constant commitment to encourage business expansion by creative, customised solutions that produce quantifiable results is what really distinguishes us from other IT firms in Calicut. We take pride in providing a wide range of services that combine strategy, technology, and creativity to assist your business achieve new heights as the best IT company in Calicut.We solve each project we take on with a customised approach because we recognise that every business is different. With a solid foundation in digital marketing principles, we have experience in mobile marketing, app promotion, and web creation. We make sure that our strategies meet your company objectives and produce tangible outcomes, whether you're launching a new website, advertising your app, or attempting to raise brand awareness through mobile marketing.At Auxxweb Solutions, the best IT company  in Calicut, our staff creates in a lot of effort to analyse data and track each campaign's effectiveness. We monitor important data using real-time analytics to determine what is effective and where we may make improvements. This enables us to keep improving our tactics, ensuring that your initiatives continue to be very successful and produce the greatest results. We guarantee that your marketing initiatives are always maximised for success by continuously modifying our strategy in response to performance data.Working with us transforms you from a client into a partner. We build plans that are as unique as your organisation after taking the time to understand your particular objectives, goals, and difficulties. Let us demonstrate how our proficiency in mobile marketing, app promotion, Website developing ,can revolutionise your online presence and help your company achieve the success it highly deserves.",
      },
      {
        heading: "Ready to Boost Your Digital Presence?",
        body: "Partnering with the Best IT Company in Calicut, Auxxweb Solutions, means taking your business to new heights in the digital world. If you’re ready to enhance your online presence and reach your target audience more effectively, contact us today for a consultation. We’ll work with you to develop a digital marketing strategy that aligns with your goals and drives long-term success.",
      },
    ],
  };
  

  const sideArticles = [
    {
      title: "Web Development Services by Auxxweb Solutions – Your Trusted Best IT Company in Calicut",
      category: "IT Software",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "In this digital age, a potential customer's initial image of your company is frequently formed by your website...",
      content: [
        {
          heading: "Why Web Development is Essential for Your Business",
          body: "In today's digital-first world, your website isn’t just an online presence—it’s the heart of your business’s digital strategy.Your website serves as your business’s digital storefront, a place where customers learn about your services, browse your offerings, and decide whether to engage with your brand. But in today’s fast-paced, technology-driven world, simply having a website isn’t enough. You need a website that stands out, loads quickly, and offers a seamless user experience. At Auxxweb Solutions, we provide comprehensive web development services designed to create user-friendly, responsive, and visually appealing websites that attract and retain customers.",
        },
        {
          heading: "Our Approach to Web Development",
          body: "As the Best IT Company in Calicut, we pride ourselves on taking a holistic approach to web development, ensuring that every aspect of your site is optimized for success. Here’s how we do it:",
          points: [
            "1. Custom Website Design      : We at Auxxweb Solutions are aware that every company is different. The potential of your brand just cannot be fully realised with a cookie-cutter website. To stand out from the competition and provide your visitors with a distinctive experience, your website should be a reflection of your company's identity, objectives, and vision. For this reason, we specialise in designing custom websites that are just as unique as your company.As the best IT company in Calicut, we take a team-based approach to designing unique websites. We take the time to learn about your company, your target market, and your goals in order to make sure that every design element—from the layout and colour scheme to the entire user experience—aligns with the core principles of your brand and meets the demands of your clients.",
            "2. Mobile-Responsive Websites: In today’s digital age, more people are browsing the web on their smartphones and tablets than ever before. With mobile internet traffic continuing to increase, it’s crucial for businesses to have websites that look and function flawlessly on any device. At Auxxweb Solutions, the Best IT Company in Calicut, we specialize in building mobile-responsive websites that adapt seamlessly to smartphones, tablets, and desktops, ensuring a consistent and exceptional experience for your users, no matter what device they use.",
            "3. User Experience (UX) Optimization: First impressions matter in the digital age, and the design of your website often influences how people view your company. A stylish website is vital, but what really matters is the user experience (UX), which affects whether or not visitors stay on your site, interact with your content, and do the activities you want them to. UX optimization is our specialty at Auxxweb Solutions, the Best IT Company in Calicut, to make sure that your website not only looks fantastic but also provides a smooth, entertaining experience that attracts and retains people.",
            "4. SEO-Friendly Websites :Having a great website is only part of the equation. To truly succeed online, your website must be easily discoverable by search engines. As the best IT company in Calicut, Auxxweb Solutions specializes in developing SEO-friendly websites that not only look great but are also optimized for higher search engine rankings. Our experienced web development team incorporates the latest SEO best practices into every project, ensuring that your website is both search engine-friendly and optimized for ranking on platforms like Google. We focus on key on-page SEO elements, such as optimized meta tags, structured headings, and well-organized content, to enhance your site's visibility and drive organic traffic. ",
            "5.  E-commerce Solutions  : Your online store's success depends on offering a seamless, safe, and easy-to-use shopping experience. Auxxweb Solutions, Calicut's top IT company, specialises in creating unique e-commerce websites that meet your organisation's requirements. We incorporate necessary features like secure payment gateways, a smooth checkout procedure, and easy product navigation to guarantee your clients have a hassle-free buying experience. Whether your business sells digital content, services, or tangible goods, our e-commerce solutions are made to increase customer satisfaction, increase conversions, and increase revenues. In order to help you stand out in the crowded online industry, we at Auxxweb Solutions develop powerful e-commerce solutions.",
            "6.  Ongoing Support and Maintenance      :  Web development doesn’t end once the site is live.Auxxweb solution the best IT company in calicut offer ongoing support and maintenance services to ensure that your website remains up-to-date, secure, and fully functional. From updating content to fixing bugs, our team is always available to ensure your site continues to perform at its best."   
          ],
        },
        {
          heading: "",
          body: "A well-designed, functional website is more than just an online presence; it’s an essential tool for driving business growth and connecting with your audience. At Auxxweb Solutions, the Best IT Company in Calicut, we are dedicated to delivering high-quality, custom-built websites that cater to your unique business needs. Whether you’re looking for a visually stunning design, optimized performance, or seamless user experience, our team is ready to bring your vision to life.We combine our expertise in web development, user experience (UX) optimization, mobile responsiveness, and SEO best practices to create websites that not only look good but also perform well in search engines and engage users effectively. Your website should be a powerful asset for your business, helping you attract, engage, and convert visitors into loyal customers.If you're ready to take the next step toward building a website that stands out, drives results, and supports your business goals, contact Auxxweb Solutions today. Let’s work together to create a digital presence that will set you apart from the competition and bring your business to new heights.",
        },
        {
          heading: "",
          body:'  '
        },
      ],
      },
    {
      title: "App Development Services by Auxxweb Solutions: Building Future-Ready Mobile Apps",
      category: "IT Software",
      img: "https://miro.medium.com/v2/resize:fit:1024/1*yBt65HhmARbqZDDJ1McFDg.png",
      description:
        "Having a strong and user-friendly mobile application can be crucial in today's digital world for engaging with your audience and promoting product development. ",
      content: [
        {
          heading: "Why Choose Auxxweb Solutions for Your App Development?",
          body: "At Auxxweb Solutions, we believe that successful app development goes beyond just coding. It requires understanding your business goals, user needs, and market trends to create a solution that delivers value. Here's why we're the go-to choice for businesses seeking reliable app development services in Calicut:",
        },
        {
          heading: "Our App Development Process",
          body: "      Our app development process is built on collaboration, transparency, and efficiency. Here's how we work with you to bring your app idea to life: ",
          points: [
            "Requirement Analysis: At Auxxweb Solutions, the best IT company in Calicut, we begin every app development project with a thorough requirement analysis. This crucial first step involves gaining a deep understanding of your business goals, target audience, and specific needs. By engaging with you directly, we gather valuable insights that allow us to define the core objectives of your app. This helps us create a clear vision for the app’s functionality, design, and overall user experience.",
            "Wireframing and Design: Our design team creates wireframes and prototypes to visualize the app's layout and user interface. We prioritize user-friendly designs that ensure an engaging experience.",
            "App Development: Our developers begin coding your app using the latest technologies and frameworks, ensuring high performance, security, and scalability.",
            "Testing and Quality Assurance:  Before launching, we thoroughly test the app to ensure it functions as expected across all platforms and devices. We fix any bugs or issues that arise, guaranteeing a smooth experience.",
            "Launch and Support: : After a successful launch, we provide continuous support and updates, ensuring that your app stays relevant and fully operational.",
          ],
        },
        {
          heading: "User-Centric Design for Maximum Impact",
          body: "A great design is basis of a great app. The best IT company in Calicut, Auxxweb Solutions, prioritises user-centric design to make sure your app is not only attractive but also simple to use and intuitive. We are aware that an app's user experience (UX) is crucial to its success. To ensure that users have a smooth and pleasurable experience at every touchpoint, we give top priority to UX design. Our staff puts a lot of effort into making sure your app is user-friendly, entertaining, and effective in order to increase user satisfaction and retention. We increase client loyalty and promote repeat engagement by creating an app that people adore, which directly supports the long-term success of your company.",
        },
        {
          heading: "Secure, Scalable, and Reliable Solutions",
          body: "Security is a top priority when it comes to app development, especially when dealing with sensitive user data. Our team implements robust security measures to protect your app and its users from potential threats. Beyond security, we build scalable applications that can grow with your business. Whether you need to add new features or handle an increase in traffic, our apps are designed to be flexible and adaptable, ensuring they remain effective as your business expands.",
        },
        {
          heading: "End-to-End App Development Services",
          body: "The best IT company in Calicut , Auxxweb Solutions, provides full-cycle app development, handling each stage of the procedure. We make sure that every detail is carefully managed, starting with the original concept and design and continuing through development, testing, and deployment. Throughout the whole development process, our team works closely with you, keeping you updated and involved at every turn. To ensure that the app we develop precisely fits your vision and business objectives, we place a high priority on communication and teamwork.",
        },
        {
          heading: "Tailored Mobile Apps for Your Business",
          body: " We take the time to understand your unique demands before beginning the development process since we recognise that every business is unique. Regardless of your preference for a cross-platform solution, an Android app, or a native iOS app, our skilled development team builds unique mobile apps that satisfy your functional needs and long-term commercial objectives. Our solutions are made to help you stand out in the crowded mobile market of today by improving user experiences and increasing engagement.",
        },
        {
          heading: "Future-Proof Your Business with Auxxweb Solutions",
          body: "At Auxxweb Solutions, we are passionate about helping businesses succeed in the mobile-first world. Our app development services are designed to build long-term value, providing you with a powerful tool to connect with customers, streamline operations, and grow your business. As the best IT company in Calicut, we are committed to delivering mobile solutions that exceed expectations and help you stay ahead of the competition.Ready to bring your app idea to life? Contact us today to discuss your project and discover how we can help you create the perfect mobile app tailored to your business needs.",
        },
      ],
    },
    // {
    //   title: "Exploring the Fascinating Realm of Birds",
    //   category: "Species",
    //   img: "https://img.freepik.com/free-photo/blogging-gone-viral-camera-concept_53876-127618.jpg?semt=ais_hybrid",
    //   description:
    //     "Exploring the Fascinating Realm of Birds and Their Ecological Significance",
    // },
  ];

  return (
    <div className="relative min-h-screen bg-[#111111] text-white">
      <Menu />
      <div className="pt-10 absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />

      {/* Main Content */}
      <div className="relative pt-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="pt-8 text-6xl md:text-8xl lg:text-9xl font-light leading-none">
            BLOGS
          </h2>
        </motion.div>
        <motion.p
          className="text-neutral-400 text-center mt-6 max-w-xl mx-auto text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          For four generations, we've been crafting the legacy of metal,
          transforming it from a raw material into timeless art.
        </motion.p>
      </div>

      <div className="relative pt-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12">
            Popular <span className="text-[#008d92]">Articles</span> /
          </h2>

          {/* Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Main Article */}
            <div
              className="lg:col-span-3 group cursor-pointer"
              onClick={() => navigate("/blogdetails", { state: mainArticle })}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={mainArticle.img}
                  alt={mainArticle.title}
                  className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-4 sm:p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm backdrop-blur-sm mb-2 sm:mb-3">
                    {mainArticle.category}
                  </span>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
                    {mainArticle.title}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {mainArticle.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Side Articles */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {sideArticles.map((article) => (
                <div
                  key={article.title}
                  className="group cursor-pointer"
                  onClick={() => navigate("/blogdetails", { state: article })}
                >
                  <div className="flex gap-3 sm:gap-4 items-start">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden">
                      <img
                        src={article.img}
                        alt={article.title}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm backdrop-blur-sm mb-1 sm:mb-2">
                        {article.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                        {article.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
