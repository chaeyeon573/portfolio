import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Mail,
  Github,
  GraduationCap,
  Award,
  Briefcase,
  BookOpen,
  Code,
  Globe,
  ExternalLink,
  Calendar,
  Star,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

export default function Portfolio() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-900">Chaeyeon Kim</h2>
            <div className="hidden md:flex space-x-8">
              {["About", "Education", "Research", "Experience", "Skills"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-slate-600 hover:text-indigo-600 transition-colors font-medium"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
                  Chaeyeon Kim
                </h1>
                <p className="text-xl text-slate-600 mb-6 max-w-2xl">
                  Sociology & Applied Statistics Student at Yonsei University,
                  passionate about AI-driven social data analysis and
                  computational social science.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="w-4 h-4" />
                  Seoul, South Korea
                </div>
                <a
                  href="mailto:codus08@yonsei.ac.kr"
                  className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  codus08@yonsei.ac.kr
                </a>
                <a
                  href="https://github.com/chaeyeon573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  chaeyeon573
                </a>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                <a href="mailto:codus08@yonsei.ac.kr">
                  <Button className="bg-indigo-600 hover:bg-indigo-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Button>
                </a>
                <a
                  href="https://github.com/chaeyeon573"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    View GitHub
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d92f0b57512f4376bfc9a0/b8c142e95_profilephoto2.jpg"
                  alt="Chaeyeon Kim"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests Statement */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Research Interest
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    I am interested in both applying AI and large language
                    models as scalable research instruments for social inquiry
                    and treating them as sociotechnical phenomena to be
                    explained. My current focus lies at the intersection of
                    computational social science, network analysis, and the
                    social implications of AI.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Research Focus Areas
          </h2>
          <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
            Exploring the intersection of artificial intelligence, social
            science, and statistical modeling
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image:
                  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d92f0b57512f4376bfc9a0/276127d1a_ai_drivenpng.png",
                title: "AI-Driven Methods for Social Data",
              },
              {
                image:
                  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d92f0b57512f4376bfc9a0/4ebe17c6e_comp_soc_scipng.png",
                title: "Computational Social Science",
              },
              {
                image:
                  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d92f0b57512f4376bfc9a0/114a0535b_social_networkpng.png",
                title: "Social Network Analysis",
              },
              {
                image:
                  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d92f0b57512f4376bfc9a0/3efca4d34_statistical_modelpng.png",
                title: "Statistical Modeling",
              },
            ].map((interest) => (
              <Card
                key={interest.title}
                className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <img
                      src={interest.image}
                      alt={interest.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-slate-900">
                    {interest.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Education
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d92f0b57512f4376bfc9a0/1532b7667_Yonsei-University-Korean-Language-Institute_ALTools_AIUpscaler.png"
                    alt="Yonsei University"
                    className="w-16 h-16 object-contain"
                  />
                  <Badge className="bg-indigo-100 text-indigo-700">
                    Current
                  </Badge>
                </div>
                <CardTitle className="text-xl">Yonsei University</CardTitle>
                <p className="text-slate-600">
                  Bachelor of Science in Sociology & Applied Statistics
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">GPA</span>
                    <span className="font-bold text-indigo-600">3.99/4.3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Period</span>
                    <span className="font-medium">Mar 2021 - Present</span>
                  </div>
                  <div className="pt-3">
                    <p className="text-sm text-slate-600 mb-2">
                      Relevant Coursework:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {[
                        "Mathematical Statistics I & II",
                        "Information Theory for Data Science",
                        "Regression Analysis",
                        "Object-Oriented Programming",
                        "NLP and ChatGPT",
                        "Introduction to AI",
                      ].map((course) => (
                        <Badge
                          key={course}
                          variant="outline"
                          className="text-xs bg-slate-50"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d92f0b57512f4376bfc9a0/ea175410a_Seal_of_University_of_California_Berkeleysvg.png"
                    alt="UC Berkeley"
                    className="w-16 h-16 object-contain"
                  />
                  <Badge className="bg-purple-100 text-purple-700">
                    Exchange
                  </Badge>
                </div>
                <CardTitle className="text-xl">UC Berkeley</CardTitle>
                <p className="text-slate-600">College of Letters & Science</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">GPA</span>
                    <span className="font-bold text-purple-600">3.85/4.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Period</span>
                    <span className="font-medium">Jan 2023 - Dec 2023</span>
                  </div>
                  <div className="pt-3">
                    <p className="text-sm text-slate-600 mb-2">
                      Courses Taken:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {[
                        "Linear Algebra",
                        "Calculus",
                        "Concept of Probability",
                      ].map((course) => (
                        <Badge
                          key={course}
                          variant="outline"
                          className="text-xs bg-slate-50"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-0 bg-gradient-to-r from-amber-50 to-yellow-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Academic Honors
                  </h3>
                  <p className="text-slate-700">
                    Received the academic honor twice for ranking within the top
                    3% of the Department of Sociology:
                  </p>
                  <ul className="mt-2 space-y-1 text-slate-700">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      1st Semester 2025
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      2nd Semester 2022
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Research Projects */}
      <section id="research" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Research Projects
          </h2>
          <div className="space-y-8">
            {[
              {
                title:
                  "Not Alone, Not Forgotten: Protective Role of Quantity and Quality of Social Network on Cognitive Decline",
                author: "Chaeyeon Kim, Yoosik Youm (Advisor)",
                period: "Apr 2025 - Present",
                description:
                  "Investigating whether frequent and meaningful social connections protect against cognitive decline in older adults.",
                status: "Ongoing",
                color: "indigo",
                image:
                  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d92f0b57512f4376bfc9a0/aa7f10b11_1.png",
                github:
                  "https://github.com/chaeyeon573/social-network-analysis-research/blob/master/Not%20Alone%2C%20Not%20Forgotten.pdf",
              },
              {
                title:
                  "When More Isn't Better: The Role of Relationship Quality in Cognitive Aging",
                author: "Chaeyeon Kim",
                period: "Mar 2025 - Jun 2025",
                description:
                  "Analyzed how the quality (support vs. burden) and quantity of spouse, family, and friend ties predict cognitive function in older adults, revealing that friend support buffers cognitive decline.",
                status: "Completed",
                color: "emerald",
                image:
                  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d92f0b57512f4376bfc9a0/39cdc0461_2.png",
                github:
                  "https://github.com/chaeyeon573/cognitive-aging-relationship-quality/blob/main/When%20More%20Isn%E2%80%99t%20Better%20The%20Role%20of%20Relationship%20Quality%20in%20Cognitive%20Aging.pdf",
              },
              {
                title:
                  "The Swipe for Solace: How Social Support and Emotional Needs Shape Dating App Use",
                author: "Chaeyeon Kim, Chaeeun Kim, Chaeeun Kim",
                period: "Mar 2025 - Jun 2025",
                description:
                  "Led a mixed-methods study (survey and interview) linking lower social support to greater dating-app use and highlighting the role of supportive app experiences in reducing loneliness.",
                status: "Completed",
                color: "purple",
                image:
                  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d92f0b57512f4376bfc9a0/325081e91_3.png",
                github:
                  "https://github.com/chaeyeon573/dating-app-social-support-research/blob/main/The%20Swipe%20for%20Solace_%20%20How%20Social%20Support%20and%20Emotional%20Needs%20Shape%20Dating%20App%20Use.pdf",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 border-0 bg-white/80 border-l-4 border-l-${project.color}-400`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-64 flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-square object-contain rounded-lg shadow-md bg-white"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-2">
                            {project.title}
                          </h3>
                          <p className="text-slate-600 font-medium mb-2">
                            {project.author}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {project.period}
                            </span>
                            <Badge
                              className={`bg-${project.color}-100 text-${project.color}-700`}
                            >
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-700 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View on GitHub
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d92f0b57512f4376bfc9a0/2ad170c51_YourFoodIsHereLOGO-41.png"
                      alt="Your Food"
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <CardTitle className="text-xl">Founder & CEO</CardTitle>
                      <a
                        href="https://m.smartstore.naver.com/yourfoodishere"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 font-medium hover:underline flex items-center gap-1"
                      >
                        Your Food
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Current</Badge>
                </div>
                <div className="flex items-center gap-4 text-slate-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    June 2024 - Present
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Seoul, South Korea
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    Led end-to-end import operations for foods including kataifi
                    pastry and Swedish candy — managing overseas sourcing,
                    customs compliance, and international/domestic logistics.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    Negotiated supplier contracts with exporters in Canada,
                    Turkey, and Sweden and expanded distribution to B2B partners
                    and online channels in Korea, leading marketing efforts for
                    sales growth.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d92f0b57512f4376bfc9a0/640cb3081_SSL-30-Logo-Circle-blue.png"
                      alt="UC Berkeley Space Sciences Lab"
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <CardTitle className="text-lg">
                        Student Administrative Assistant
                      </CardTitle>
                      <p className="text-purple-600 font-medium">
                        UC Berkeley Space Sciences Lab
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    May 2023 - Oct 2023 • Berkeley, CA
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      Scanned and digitized research documents to create
                      searchable digital archive
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      Designed and distributed monthly lab newsletters with
                      research updates
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d92f0b57512f4376bfc9a0/1532b7667_Yonsei-University-Korean-Language-Institute_ALTools_AIUpscaler.png"
                      alt="Yonsei University Korean Language Institute"
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <CardTitle className="text-lg">
                        Student Administrative Assistant
                      </CardTitle>
                      <p className="text-blue-600 font-medium">
                        Yonsei University Korean Language Institute
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Sep 2022 - Dec 2022 • Seoul, South Korea
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      Provided front-desk support in English and Korean for
                      international students and parents
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      Assisted with document requests and student inquiries
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Code className="w-5 h-5 text-indigo-600" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "R",
                    "Java",
                    "SQL",
                    "HTML",
                    "CSS",
                    "JavaScript",
                  ].map((lang) => (
                    <Badge key={lang} className="bg-indigo-100 text-indigo-700">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Vim"].map((tool) => (
                    <Badge key={tool} className="bg-purple-100 text-purple-700">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Globe className="w-5 h-5 text-emerald-600" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Korean</span>
                    <Badge className="bg-emerald-100 text-emerald-700">
                      Native
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>English</span>
                    <Badge className="bg-emerald-100 text-emerald-700">
                      Fluent
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Activities & Interests
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d92f0b57512f4376bfc9a0/c0e5318ca_flag.png"
                    alt="Yonsei Eagles"
                    className="w-10 h-10 object-contain"
                  />
                  <CardTitle className="text-lg">
                    Yonsei Eagles Flag Football Club
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Position</span>
                    <Badge className="bg-amber-100 text-amber-700">
                      Wide Receiver
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Period</span>
                    <span className="font-medium">Aug 2024 - Aug 2025</span>
                  </div>
                  <p className="text-sm text-slate-700">
                    Participated in team practices twice a week as a wide
                    receiver, developing teamwork and athletic skills.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  🎹 Piano Playing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700 mb-4">
                  Passionate about expressing creativity through music and piano
                  performance.
                </p>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d92f0b57512f4376bfc9a0/ac94f7dbb_piano.jpg"
                    alt="Piano playing"
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            I'm always interested in discussing research opportunities,
            collaborations, or innovative projects in computational social
            science.
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:codus08@yonsei.ac.kr">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
            </a>
            <a
              href="https://github.com/chaeyeon573"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub Profile
              </Button>
            </a>
          </div>
          <Separator className="my-8 bg-slate-700" />
          <p className="text-slate-400 text-sm">
            © 2024 Chaeyeon Kim. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
