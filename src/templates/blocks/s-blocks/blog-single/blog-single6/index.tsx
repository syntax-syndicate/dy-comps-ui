"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  LinkIcon,
  MoreHorizontal,
  Github,
  Dribbble,
} from "lucide-react";

export default function BlogPost() {
  return (
    <main className="bg-background text-foreground">
      <BlogHeader />
      <div className="relative z-20 mx-4 -mt-36 flex max-w-screen-xl justify-between rounded bg-background p-6 xl:mx-auto xl:-mt-32 xl:p-9">
        <BlogContent />
        <Sidebar />
      </div>
      <RelatedArticles />
    </main>
  );
}

function BlogHeader() {
  return (
    <header className="h-[460px relative w-full bg-[url('https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg')] bg-cover bg-center bg-no-repeat bg-blend-darken xl:h-[537px]">
      <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-70"></div>
      <div className="absolute left-1/2 top-20 mx-auto w-full max-w-screen-xl -translate-x-1/2 px-4 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
        <span className="mb-4 block text-white">
          Published in{" "}
          <Button className="px-0" variant="link">
            AI Insights
          </Button>
        </span>
        <h1 className="mb-4 max-w-4xl text-2xl font-extrabold leading-none text-primary-foreground text-white sm:text-3xl lg:text-4xl">
          Unlocking the Future: Exploring the Latest Breakthroughs at
          QuantumLeap AI
        </h1>
        <p className="text-lg font-normal text-gray-300">
          Delve into the cutting-edge research and innovative solutions shaping
          tomorrow's AI landscape at QuantumLeap AI.
        </p>
      </div>
    </header>
  );
}

function BlogContent() {
  return (
    <Card className="w-full max-w-none xl:w-[828px]">
      <CardContent className="p-6">
        <div className="mb-6 flex flex-col justify-between lg:flex-row lg:items-center">
          <div className="mb-2 flex items-center space-x-3 text-base text-muted-foreground lg:mb-0">
            <span>
              By{" "}
              <Button
                variant="link"
                className="p-0 font-semibold text-foreground"
              >
                Dr. Anya Sharma
              </Button>
            </span>
            <span className="h-2 w-2 rounded-full bg-muted"></span>
            <time className="text-muted-foreground" dateTime="2024-01-26">
              January 26, 2024, 10:00am PST
            </time>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <LinkIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <article className="prose dark:prose-invert max-w-none">
          <p>
            At QuantumLeap AI, we're not just keeping pace with the AI
            revolution; we're driving it. Our team is constantly pushing the
            boundaries of what's possible, from developing advanced neural
            networks to exploring ethical AI implementation.
          </p>
          <p>
            We believe that by focusing on both fundamental research and
            practical applications, we can create AI solutions that are not only
            powerful but also responsible and beneficial to humanity.
          </p>
          <p>
            This month, we're excited to share some of our recent breakthroughs
            and insights into the future of AI.
          </p>
          <h2>Our Latest Advancements in AI</h2>
          <p>
            QuantumLeap AI is dedicated to pioneering innovation in artificial
            intelligence. Our projects range from cutting-edge machine learning
            models to groundbreaking research in quantum computing applications
            for AI.
          </p>
          <p>Here’s a peek into our most recent developments:</p>
          <p>
            <ul>
              <li>
                <b>Enhanced Natural Language Processing</b>: We've developed a
                novel NLP model that outperforms current benchmarks in
                contextual understanding and text generation.
              </li>
              <li>
                <b>Predictive Analytics</b>: Our predictive algorithms now offer
                more accurate forecasts across various sectors, including
                finance and healthcare.
              </li>
              <li>
                <b>Ethical AI Framework</b>: We have launched an open-source
                toolkit for developing ethical and unbiased AI systems, which we
                believe is crucial for the future of responsible AI development.
              </li>
            </ul>
          </p>
          <h2>The Importance of Responsible AI</h2>
          <p>
            At QuantumLeap AI, we believe the benefits of AI must be enjoyed by
            everyone. We are strong proponents for a future where AI is
            developed with the utmost considerations for ethics, privacy, and
            fairness.
          </p>
          <p>
            We are committed to developing AI technologies that not only enhance
            our capabilities but also uphold our core values. Our Ethical AI
            Framework is a testament to that commitment.
          </p>
          <h2>What’s Next?</h2>
          <p>
            Our journey doesn't stop here. We are continuously working on
            several exciting new projects that will push the boundaries of AI
            even further.
          </p>
          <ol>
            <li>
              <strong>Quantum Machine Learning: </strong>Exploring the
              application of quantum computing to accelerate machine learning
              algorithms.
            </li>
            <li>
              <strong>AI for Sustainability: </strong>Developing AI-driven
              solutions to address climate change and promote sustainable
              practices.
            </li>
            <li>
              <strong>AI-Powered Healthcare:</strong> Creating advanced
              diagnostic tools and personalized treatment plans using artificial
              intelligence.
            </li>
          </ol>
        </article>
      </CardContent>
    </Card>
  );
}

function Sidebar() {
  return (
    <aside className="hidden xl:block" aria-labelledby="sidebar-label">
      <div className="sticky top-6 xl:w-[336px]">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase">
              QuantumLeap AI Daily Brief
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Stay updated with the latest AI breakthroughs and insights from
              QuantumLeap AI. Get our top stories delivered directly to your
              inbox.
            </p>
            <Button className="w-full">Subscribe</Button>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase">
              Recent News
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  title: "New Breakthrough in Neural Networks",
                  image:
                    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                  time: "15 minutes",
                },
                {
                  title: "AI Ethics Initiative Launched",
                  image:
                    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                  time: "20 minutes",
                },
                {
                  title: "Quantum AI Research Update",
                  image:
                    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                  time: "10 minutes",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <img
                    src={item.image}
                    alt=""
                    className="mr-4 h-24 w-24 rounded-lg object-cover"
                  />
                  <div>
                    <h5 className="mb-2 text-lg font-bold leading-tight">
                      {item.title}
                    </h5>
                    <Button variant="link" className="p-0 text-primary">
                      Read in {item.time}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
}

function RelatedArticles() {
  return (
    <section className="bg-background py-8 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="mb-6 text-2xl font-bold text-foreground lg:mb-8">
          Related articles
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          {[
            {
              title: "AI's Role in Climate Change Mitigation",
              image:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              time: "18 minutes",
            },
            {
              title: "The Future of AI in Healthcare",
              image:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              time: "25 minutes",
            },
            {
              title: "How AI is Transforming Finance",
              image:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              time: "14 minutes",
            },
            {
              title: "Responsible AI Development",
              image:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              time: "17 minutes",
            },
          ].map((article, index) => (
            <Card key={index}>
              <CardContent className="p-0">
                <div className="flex flex-col xl:flex-row">
                  <img
                    src={article.image}
                    alt=""
                    className="h-48 w-full rounded-t-lg object-cover xl:w-48 xl:rounded-l-lg xl:rounded-tr-none"
                  />
                  <div className="p-4">
                    <h3 className="mb-2 text-xl font-bold">{article.title}</h3>
                    <p className="mb-4 text-muted-foreground">
                      Explore our insights and perspectives on how AI is
                      impacting various industries and aspects of life.
                    </p>
                    <Button variant="link" className="p-0">
                      Read in {article.time}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
