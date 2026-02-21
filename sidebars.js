module.exports = {
  tutorialSidebar: [
    "index",
    {
      type: "category",
      label: "AWS Organization",
      items: [
        "aws-organization",
        "aws-organization/overview",
        "aws-organization/accounts",
      ],
    },
    {
      type: "category",
      label: "Security",
      items: [
        "security-architecture",
        "security/compliance",
        "security/defense-in-depth",
        "security/cloudtrail",
        "security/vpc-flow-logs",
      ],
    },
    {
      type: "category",
      label: "Network & DNS",
      items: [
        "network-dns",
        "network/transit-gateway",
        "network/platform-vpc",
        "network/traffic-flow",
        "network/vpc-peering",
        "network/vanity-domains",
        "network/service-discovery",
      ],
    },
    {
      type: "category",
      label: "IAM & SSO",
      items: [
        "iam-sso",
        "iam/federation",
        "iam/group-mapping",
        "iam/permission-sets",
      ],
    },
    {
      type: "category",
      label: "Platform",
      items: [
        "platform-architecture",
        "platform/ecs",
        "platform/eks",
        "platform/lambda",
      ],
    },
    {
      type: "category",
      label: "CI/CD",
      items: [
        "software-delivery",
        "cicd/workflow",
        "cicd/runners",
        "cicd/oidc",
        "cicd/argocd",
      ],
    },
  ],
};
