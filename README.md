# Cluster Node

A scalable Node.js server using the native **Cluster** module to take full advantage of multi-core processors.

## About

This project implements a Node.js cluster to run multiple worker processes, significantly improving performance and CPU utilization on multi-core servers.

## Features

- Optimized use of all available CPU cores
- Creates `numCPUs * 2` workers (easily configurable)
- Automatic restart of crashed workers
- Clean separation between Primary and Worker processes
- Easy to integrate with Express, Fastify, or any other framework

## Technologies

- Node.js
- TypeScript
- Cluster (native module)

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
# Clone the repository
git clone https://github.com/viniciustt2/nodejs-cluster-scaling.git

# Navigate to the project
cd cluster-node

# Install dependencies
npm install

# Run in development mode
npm run dev
