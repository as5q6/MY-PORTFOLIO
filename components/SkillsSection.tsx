'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const skillCategories = {
    "Web Technologies": {
        icon: "🌐",
        skills: [
            "Java Servlets", "JavaScript", "jQuery", "TypeScript", "XML", "WSDL", "XSD",
            "HTML5", "DHTML", "XHTML", "CSS3", "nodeJS", "Composer", "Python", "AJAX", "JSP"
        ]
    },
    "Java Technologies": {
        icon: "☕",
        skills: [
            "Vert.X", "Spring Boot", "Spring Security", "Spring Cloud", "JSP", "Servlets",
            "JDBC", "JMS", "JFC/Swing", "Struts", "Hibernate", "Maven/Gradle", "JPA"
        ]
    },
    "JavaScript Ecosystem": {
        icon: "⚛️",
        skills: [
            "React", "Redux", "Angular (6,7,8)", "Ngrx", "jQuery", "EXT.js", "Backbone.js",
            "Node.js", "Vue JS", "React (with JSX)", "jQuery", "Qunit", "TypeScript"
        ]
    },
    "Databases": {
        icon: "🗄️",
        skills: [
            "Microsoft SQL Server", "Oracle", "MySQL", "PostgreSQL", "MongoDB",
            "Redis", "Cassandra", "CouchDB", "Snowflake", "Hadoop", "Big Data",
            "Google BigQuery Kusto"
        ]
    },
    "Cloud & DevOps": {
        icon: "☁️",
        skills: [
            "AWS (s3, Lambda, Step Function, AMQ, SNS, SQS)", "CloudWatch Events",
            "EBS", "GCP", "DataBricks", "PCF", "Kubernetes", "Azure",
            "Jenkins", "Ansible/Chef/Puppet/Spinnaker", "Atlassian Tool suite",
            "EC2", "ECS", "codepipeline", "cloudformation"
        ]
    },
    "Development Tools": {
        icon: "🛠️",
        skills: [
            "Git", "Bitbucket", "Artifactory", "Gitlab", "SVN", "Terraform", "Helm",
            "Azure DevOps", "Eclipse", "IntelliJ", "Spring Tool Studio", "Visual Studio"
        ]
    }
};

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Expertise</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skillCategories).map(([category, { icon, skills }]) => (
                    <motion.div
                        key={category}
                        className={`bg-gradient-to-br ${activeCategory === category
                                ? 'from-blue-50 to-indigo-50 border-blue-200'
                                : 'from-gray-50 to-gray-100 border-gray-200'
                            } rounded-xl p-6 border-2 cursor-pointer`}
                        onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl">{icon}</span>
                            <h4 className="text-lg font-semibold text-gray-900">{category}</h4>
                        </div>

                        <motion.div
                            initial={false}
                            animate={{ height: activeCategory === category ? "auto" : "100px" }}
                            className="overflow-hidden"
                        >
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white rounded-full text-sm font-medium
                      text-gray-700 shadow-sm hover:shadow-md transition-shadow
                      border border-gray-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {activeCategory !== category && (
                            <div className="text-blue-600 text-sm mt-2 font-medium">
                                Click to expand →
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
} 