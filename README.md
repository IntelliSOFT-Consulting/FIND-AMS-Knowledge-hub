# FIND AMS Knowledge Hub
## Introduction
This repository contains the code for the FIND AMS Knowledge Hub. The FIND AMS Knowledge Hub is a web application that allows users to search for and view information about antimicrobial resistance (AMR) surveillance systems. The FIND AMS Knowledge Hub is built using the [React](https://reactjs.org/) JavaScript library and the [Ant design](https://ant.design/) UI framework.

## Getting Started
### Prerequisites
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation
1. Clone the repository
```sh
git clone https://github.com/IntelliSOFT-Consulting/FIND-AMS-Knowledge-hub.git
```

2. Navigate to the repository
```sh
cd FIND-AMS-Knowledge-hub
```

3. Create a `.env` file in the root directory of the repository and add the following environment variables:
```sh
REACT_APP_BASE_URL=<URL of the FIND AMS DHIS2 instance>
REACT_APP_API_TOKEN=<API token for the FIND AMS DHIS2 instance>
```

4. Build the Docker image
    
* For production
```sh
docker-compose -f docker-compose.prod.yml up -d --build
```

* For development
```sh
docker-compose -f docker-compose.dev.yml up -d --build
```

## Usage
The FIND AMS Knowledge Hub can be accessed at `http://localhost:3000/` in a web browser for development and `http://localhost:80/` for production.
