'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Section {
  title: string;
  content: string;
  keyPoints: string[];
  image?: string;
}

interface ArticleContent {
  introduction: string;
  sections: Section[];
  conclusion: string;
}

interface Article {
  id: number;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  category: string;
  content: ArticleContent;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Containerization Best Practices 🐳",
    summary: "Docker & Kubernetes optimization techniques for Java applications",
    readTime: "15 min read",
    date: "2024-01-15",
    category: "DevOps",
    content: {
      introduction: "Let's dive into real-world containerization strategies that make your Java apps cloud-ready. Practical tips for Docker and Kubernetes that actually work in production. 🎯",
      sections: [
        {
          title: "Docker Optimization Techniques 🛠️",
          content: `• Java Container Optimization 📦
    - Multi-stage builds: 200MB vs 800MB image size
    - JVM container flags: -XX:MaxRAMPercentage=75.0 -XX:InitialRAMPercentage=50.0
    - Base image selection: eclipse-temurin:17-jre-jammy (120MB) vs full JDK (460MB)
    - Layer caching: 5x faster builds with proper layering

• Kubernetes Configuration ⚡
    - Resource limits: requests.memory=512Mi, limits.memory=1Gi
    - Liveness probe: initialDelaySeconds=30, periodSeconds=10
    - Readiness setup: Spring Actuator with 2s timeout
    - HorizontalPodAutoscaler: target CPU utilization 75%

• Container Security 🔒
    - Non-root user: uid=1000, gid=1000
    - Read-only root filesystem
    - Security context: runAsNonRoot=true
    - Resource quotas: CPU/Memory limits per namespace

• Monitoring Setup 📊
    - Prometheus metrics: 1s scrape interval
    - Container insights: CPU, Memory, Network stats
    - Log aggregation: EFK stack integration
    - Grafana dashboards: 4 golden signals monitoring`,
          keyPoints: [
            "Optimized images are 75% smaller and boot 3x faster",
            "Proper K8s config achieves 85% resource utilization",
            "Security best practices prevent 95% of container vulnerabilities",
            "Monitoring catches 99% of issues before users do"
          ]
        }
      ],
      conclusion: "Focus on image size (75% reduction), resource efficiency (85% utilization), and security (95% vulnerability prevention). Monitor everything. 📈"
    }
  },
  {
    id: 2,
    title: "RESTful API Design & Implementation 🌐",
    summary: "Building scalable and secure REST APIs with Spring Boot",
    readTime: "12 min read",
    date: "2024-01-20",
    category: "API",
    content: {
      introduction: "Skip the theory - here's how to build REST APIs that handle millions of requests. Real patterns, real security, real performance. 🎯",
      sections: [
        {
          title: "API Design Patterns ⚔️",
          content: `• REST Best Practices 🌊
    - Versioning: URI-based (/v1/) - 0 breaking changes
    - Pagination: offset/limit with 25 items default
    - Filtering: Spring Specification - 70% query reduction
    - Rate limiting: 1000 req/min per API key

• Security Implementation 🛡️
    - JWT Auth: RS256 signing, 15min expiry
    - Rate limiting: Bucket4j with Redis - 10k req/s
    - API Keys: Rotation every 30 days
    - CORS: Specific origins only, no wildcards

• Performance Tuning ⚡
    - Connection pool: HikariCP max=20 per instance
    - Caching: Redis with 5min TTL - 80% hit rate
    - Compression: gzip for 70% bandwidth reduction
    - Async processing: CompletableFuture for I/O

• Documentation & Testing 📚
    - OpenAPI 3.0 with Springdoc
    - Automated tests: 85% coverage
    - Performance tests: Gatling for load testing
    - API monitoring: 99.9% uptime SLA`,
          keyPoints: [
            "Proper design handles 10k req/s per instance",
            "Security measures prevent 99% of common attacks",
            "Caching reduces database load by 80%",
            "Documentation reduces support tickets by 60%"
          ]
        }
      ],
      conclusion: "Build APIs that scale: 10k req/s throughput, 99.9% uptime, 80% cache hit rate. Always measure and monitor. 📊"
    }
  },
  {
    id: 3,
    title: "Cloud-Native Java Applications ☁️",
    summary: "AWS, Azure, and GCP deployment strategies for Java apps",
    readTime: "14 min read",
    date: "2024-02-01",
    category: "Cloud",
    content: {
      introduction: "Practical guide to deploying Java applications in the cloud. Real configurations, real scaling strategies, real cost optimization. 🚀",
      sections: [
        {
          title: "Cloud Deployment Patterns 🌩️",
          content: `• AWS Deployment 🔧
    - ECS Fargate: 0.25 vCPU, 512MB per task
    - Auto-scaling: Target tracking at 75% CPU
    - ALB: Path-based routing with SSL
    - Cost: $0.02 per task hour optimized

• Azure Configuration ⚡
    - AKS: B2s instances (2 vCPU, 4GB)
    - VMSS: Scale at 70% CPU utilization
    - Application Gateway: WAF enabled
    - Managed identities for security

• GCP Setup 🛠️
    - GKE Autopilot: Auto-provisioned nodes
    - Cloud Run: Serverless deployments
    - Load balancing: Global HTTPS LB
    - Cloud Armor: DDoS protection

• Monitoring & Logging 📊
    - CloudWatch/App Insights metrics
    - Distributed tracing with X-Ray/Jaeger
    - Log aggregation: 7-day retention
    - Cost alerts: 80% budget threshold`,
          keyPoints: [
            "Auto-scaling saves 40% on cloud costs",
            "Proper sizing reduces waste by 60%",
            "Security configs prevent 98% of attacks",
            "Monitoring catches issues in < 5 minutes"
          ]
        }
      ],
      conclusion: "Cloud-native done right: 40% cost reduction, 99.99% availability, 60% better resource usage. Monitor and optimize continuously. 💰"
    }
  },
  {
    id: 4,
    title: "Microservices Communication 🔄",
    summary: "gRPC, REST, and Event-Driven patterns in practice",
    readTime: "13 min read",
    date: "2024-02-05",
    category: "Architecture",
    content: {
      introduction: "Cut through the microservices complexity. Here's what actually works for service communication at scale. 🎯",
      sections: [
        {
          title: "Communication Patterns That Scale 📈",
          content: `• gRPC Implementation 🚀
    - Proto buffers: 60% less bandwidth vs JSON
    - Streaming: Bidirectional real-time updates
    - Connection pooling: 100 max connections
    - Load balancing: Round-robin with health checks

• Event-Driven Patterns ⚡
    - Kafka: 100k messages/sec per broker
    - RabbitMQ: Delayed message queues
    - Dead letter queues: Retry after 3 failures
    - Event schema versioning with Avro

• API Gateway Setup 🌐
    - Rate limiting: 10k req/min per client
    - Circuit breaking: 5 failures = open
    - Response caching: 5min TTL
    - JWT validation with public key rotation

• Service Discovery 🔍
    - Eureka: 30s heartbeat interval
    - DNS-based: External service lookup
    - Health checks: 10s interval
    - Failover: 3s timeout, 2 retries`,
          keyPoints: [
            "gRPC reduces network usage by 60%",
            "Event-driven handles 100k msgs/sec",
            "API Gateway prevents 99% of overload",
            "Service discovery ensures 99.9% availability"
          ]
        }
      ],
      conclusion: "Choose the right communication: gRPC for internal, REST for external, Events for decoupling. Measure and monitor everything. 📊"
    }
  },
  {
    id: 5,
    title: "Database Optimization Strategies 💾",
    summary: "SQL, NoSQL, and Caching patterns for high performance",
    readTime: "15 min read",
    date: "2024-02-10",
    category: "Database",
    content: {
      introduction: "Real-world database optimization techniques that deliver actual performance improvements. No theory, just results. 🎯",
      sections: [
        {
          title: "Database Performance Patterns ⚙️",
          content: `• SQL Optimization 📊
    - Index strategies: Covering indexes for 90% queries
    - Connection pool: HikariCP with 20 connections
    - Query tuning: Explain plan optimization
    - Partitioning: Date-based for large tables

• NoSQL Implementation 🔄
    - MongoDB: Document design patterns
    - Redis: Cache-aside with 15min TTL
    - Elasticsearch: Search optimization
    - Cassandra: Wide-column design

• Caching Strategies 🚀
    - Multi-level: L1 (JVM) + L2 (Redis)
    - Cache invalidation: Event-based
    - Write-through vs Write-behind
    - Hot key handling: Local caching

• Scaling Patterns ⚡
    - Read replicas: 5 readers per writer
    - Sharding: Hash-based distribution
    - Backup: Point-in-time recovery
    - Migration: Zero-downtime schema changes`,
          keyPoints: [
            "Proper indexing improves speed by 100x",
            "Connection pooling handles 5k TPS",
            "Caching reduces load by 80%",
            "Scaling patterns ensure 99.99% uptime"
          ]
        }
      ],
      conclusion: "Focus on data: 100x faster queries, 80% load reduction, 99.99% availability. Always measure performance impact. 📈"
    }
  },
  {
    id: 6,
    title: "CI/CD Pipeline Mastery 🔄",
    summary: "Automated testing, deployment, and monitoring",
    readTime: "11 min read",
    date: "2024-02-15",
    category: "DevOps",
    content: {
      introduction: "Build CI/CD pipelines that actually work. Real configurations, real automation, real results. 🎯",
      sections: [
        {
          title: "Pipeline Optimization ✅",
          content: `• CI Pipeline Setup 🔨
    - Build time: < 5 minutes total
    - Test coverage: 85% minimum
    - Sonar quality gates: A rating
    - Artifact versioning: Semantic

• CD Automation 🚀
    - Blue-green deployment: Zero downtime
    - Canary releases: 10% traffic
    - Rollback time: < 30 seconds
    - Environment promotion: Dev → Stage → Prod

• Quality Gates ⚡
    - Unit tests: 30s execution time
    - Integration tests: 3min maximum
    - Security scan: OWASP top 10
    - Performance baseline: Response time < 200ms

• Monitoring Integration 📊
    - Metrics collection: 15s interval
    - Log aggregation: ELK stack
    - Alert thresholds: 90% resource usage
    - Dashboard: 4 golden signals`,
          keyPoints: [
            "Pipeline runs complete in < 10 minutes",
            "Zero-downtime deployments achieved",
            "Quality gates catch 95% of issues",
            "Monitoring provides 99.9% visibility"
          ]
        }
      ],
      conclusion: "Automate everything: 10-minute pipelines, zero-downtime deployments, 95% issue detection. Monitor and improve continuously. 🔄"
    }
  }
];

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="articles" className="py-8">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8">
          <motion.h2
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Articles
          </motion.h2>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory hide-scrollbar">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              className="flex-shrink-0 w-[300px] snap-start cursor-pointer border rounded-lg p-6 hover:border-gray-400 transition-colors bg-white"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedArticle(article)}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {article.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium border bg-gray-50 text-gray-600">
                    {article.category}
                  </span>
                </div>
                <p className="text-sm mb-4 flex-grow line-clamp-2 text-gray-600">{article.summary}</p>
                <div className="flex items-center justify-between text-xs mt-auto pt-4 border-t text-gray-500">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <style jsx global>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
            >
              <motion.div
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b p-4 flex justify-between items-center z-10">
                  <div>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full border bg-gray-50 text-gray-600 inline-block mb-2">
                      {selectedArticle.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedArticle.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-8">
                  <p className="text-lg mb-8 leading-relaxed text-gray-600">{selectedArticle.content.introduction}</p>
                  {selectedArticle.content.sections.map((section, index) => (
                    <div key={index} className="mb-12">
                      <h4 className="text-2xl font-bold mb-6 text-gray-900">{section.title}</h4>
                      <div className="prose max-w-none mb-8">
                        <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed text-gray-600">{section.content}</pre>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-6 border">
                        <h5 className="font-bold text-lg mb-4 text-gray-900">Key Takeaways:</h5>
                        <ul className="grid sm:grid-cols-2 gap-4">
                          {section.keyPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border bg-white mt-0.5">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              <span className="text-sm leading-relaxed text-gray-600">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-8">
                    <h4 className="text-2xl font-bold mb-4 text-gray-900">Key Insights</h4>
                    <p className="leading-relaxed text-gray-600">{selectedArticle.content.conclusion}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
