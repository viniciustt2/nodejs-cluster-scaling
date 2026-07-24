import os from 'os';
import cluster from 'cluster';

const runPrimaryCluster = () => {
    const numCPUs = os.cpus().length * 2;

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork();
    });
}

const runWorkerCluster = async () => {
    await import('./server');
}

cluster.isPrimary ? runPrimaryCluster() : runWorkerCluster();