export const profile = {
  name: 'Manideep Goud Paruchuri',
  firstName: 'Manideep',
  title: 'DevOps Engineer',
  company: 'DP World',
  roles: ['DevOps Engineer', 'CI/CD Architect', 'Kubernetes Engineer', 'DevSecOps Advocate'],
  tagline:
    'I design secure, automated delivery pipelines and reliable cloud platforms on Azure, AWS, and Kubernetes, so teams can ship faster with confidence.',
  location: 'Hyderabad, India',
  email: 'manideepgoud2307@gmail.com',
  linkedin: 'https://www.linkedin.com/in/manideep-goud-paruchuri-183600208/',
  github: 'https://github.com/manideepgoudparuchuri',
  resumeFile: '/Paruchuri_Manideep_Resume.pdf',
  photo: '/profile.webp',
}

export const stats = [
  { value: '4+', label: 'Years in DevOps' },
  { value: '30%', label: 'Faster deployments' },
  { value: '1,000+', label: 'Vulnerabilities remediated' },
  { value: '99.9%', label: 'Platform uptime' },
]

export const about = [
  "I'm a DevOps Engineer at DP World, where I work on the CI/CD platform behind a large microservices estate. My focus is making pipelines faster, more consistent, and secure by default, from standardized Azure DevOps templates to built-in security gates like Veracode and Gitleaks.",
  'Before DP World, I spent four years at Modak Analytics running AWS and Kubernetes platforms in production. I automated releases, hardened container supply chains, and hosted LLM inference on on-prem GPU clusters, which earned me the Emerging Leader Award in 2024.',
  'I like turning manual, error-prone work into automated, observable systems, and I enjoy sharing that knowledge through documentation and training.',
]

export const services = [
  {
    icon: '🚀',
    title: 'CI/CD & Release Engineering',
    text: 'Reusable pipeline templates, branching and semantic versioning strategies, and automated release flows in Azure DevOps, GitHub Actions, and Jenkins.',
  },
  {
    icon: '🛡️',
    title: 'DevSecOps',
    text: 'Security built into every pipeline: SAST with Veracode, secret scanning with Gitleaks, code quality with SonarQube, and container scanning with Anchore and Grype.',
  },
  {
    icon: '☸️',
    title: 'Kubernetes Platforms',
    text: 'Production AKS and EKS clusters with Helm, Istio, GitOps, canary releases, and autoscaling with HPA, VPA, and Karpenter.',
  },
  {
    icon: '🏗️',
    title: 'Infrastructure as Code',
    text: 'Repeatable cloud infrastructure with Terraform, CloudFormation, and cloud-init across AWS and Azure.',
  },
  {
    icon: '📈',
    title: 'Observability & Reliability',
    text: 'Prometheus, Grafana, and New Relic monitoring, on-call support, and root cause analysis that reduce MTTR and prevent repeat incidents.',
  },
  {
    icon: '🤖',
    title: 'AI Infrastructure',
    text: 'On-prem GPU servers and Kubernetes-based LLM inference platforms, deployed with Helm and fully monitored.',
  },
]

export const experience = [
  {
    company: 'DP World',
    role: 'DevOps Engineer',
    period: 'Jul 2026 – Present',
    location: 'Hyderabad, India',
    current: true,
    bullets: [
      'Improving the organization-wide CI/CD process in Azure DevOps with standardized, reusable pipeline templates, a central branching model, and semantic versioning across many microservices.',
      'Adding security gates to pipelines: Veracode static analysis, Gitleaks secret scanning with custom detection rules, and SonarQube quality checks.',
      'Contributing to a shared Python deployment library used by every Kubernetes service, including moving ConfigMap deployment to server-side apply to remove a platform-wide size-limit failure.',
      'Supporting AKS deployments and production releases, and writing RCAs for pipeline incidents.',
      'Running knowledge-transfer sessions on Kubernetes storage, scaling, and scheduling, and on Azure DevOps, for new engineers.',
    ],
    tech: ['Azure DevOps', 'Veracode', 'Gitleaks', 'SonarQube', 'AKS', 'Python'],
  },
  {
    company: 'Modak Analytics',
    role: 'DevOps Engineer',
    period: 'Aug 2022 – Jun 2026',
    location: 'Hyderabad, India',
    current: false,
    bullets: [
      'Ran AWS and Kubernetes (EKS/AKS) platforms with CI/CD, Infrastructure as Code, and container security scanning.',
      'Built a Python deployment automation framework that cut deployment time by 30% and manual release effort by 90%.',
      'Remediated 1,000+ container vulnerabilities with an Anchore and Grype scanning pipeline, reducing risk by 70%.',
      'Maintained 99.9% uptime, and reduced incident detection time by 35% and MTTR by 40% with Prometheus and Grafana.',
      'Created reusable Helm charts that cut per-team setup time by 60%.',
      'Shipped 3+ AWS Marketplace AMI releases and set up 4+ on-prem GPU servers for LLM hosting.',
      'Ran network security scans across 500+ IP ranges and load tests across 21+ services.',
    ],
    tech: ['AWS', 'EKS', 'Terraform', 'GitHub Actions', 'Helm', 'Prometheus', 'Grafana'],
  },
]

export const skillGroups = [
  {
    title: 'Cloud',
    items: ['Azure', 'AKS', 'AWS', 'EKS', 'EC2', 'S3', 'IAM', 'VPC', 'AWS Marketplace'],
  },
  {
    title: 'CI/CD',
    items: ['Azure DevOps', 'GitHub Actions', 'Jenkins', 'ArgoCD', 'Git'],
  },
  {
    title: 'DevSecOps',
    items: ['Veracode', 'Gitleaks', 'SonarQube', 'Anchore', 'Grype', 'Secrets Manager'],
  },
  {
    title: 'Containers & Orchestration',
    items: ['Docker', 'Kubernetes', 'Helm', 'Istio', 'Karpenter'],
  },
  {
    title: 'IaC & Scripting',
    items: ['Terraform', 'CloudFormation', 'cloud-init', 'Python', 'Bash'],
  },
  {
    title: 'Observability & Systems',
    items: ['Prometheus', 'Grafana', 'New Relic', 'Linux (Ubuntu, RHEL)', 'VMware', 'GPU servers'],
  },
]

export const projects = [
  {
    title: 'Secure CI/CD Pipeline Templates',
    tag: 'DP World',
    description:
      'Reusable Azure DevOps templates that give every service the same build, version, and release flow, with Veracode, Gitleaks, and SonarQube checks built in.',
    impact: 'Consistent, secure-by-default delivery',
    tech: ['Azure DevOps', 'YAML', 'Veracode', 'Gitleaks'],
  },
  {
    title: 'Python Deployment Automation Framework',
    tag: 'Modak Analytics',
    description:
      'A Python framework that standardized application deployments and removed most manual release steps.',
    impact: '90% less manual release effort',
    tech: ['Python', 'CI/CD', 'Kubernetes'],
  },
  {
    title: 'Container Security Scanning Pipeline',
    tag: 'Modak Analytics',
    description:
      'A GitHub Actions pipeline that scans every container image with Anchore and Grype and blocks critical vulnerabilities before release.',
    impact: '1,000+ vulnerabilities fixed, 70% lower risk',
    tech: ['GitHub Actions', 'Anchore', 'Grype', 'Docker'],
  },
  {
    title: 'On-Prem LLM Inference Platform',
    tag: 'Modak Analytics',
    description:
      'LLM inference on GPU servers orchestrated by Kubernetes and Helm, with Prometheus and Grafana dashboards for performance and health.',
    impact: '4+ GPU servers in production',
    tech: ['Kubernetes', 'Helm', 'GPU', 'Prometheus', 'Grafana'],
  },
]

export const education = {
  school: 'Sreenidhi Institute of Science and Technology',
  degree: 'B.Tech, Information Technology',
  period: '2018 – 2022',
  detail: 'CGPA 8.38 / 10',
}

export const award = {
  title: 'Emerging Leader Award',
  org: 'Modak Analytics',
  date: 'Dec 2024',
}
