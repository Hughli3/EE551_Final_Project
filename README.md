# EE551_Final_Project
The Final Project of python course EE551.
## Enviroment

- Package management tool: conda
- Language: Pyhon 3.8.2

## Deployment
- System: CentOS 8
- Environment init
```
yum install git
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda.sh
bash ~/miniconda.sh -b -p $HOME/miniconda
echo 'export PATH="~/miniconda/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

## How to run?
1. Git clone the project git
`git clone https://github.com/Hughli3/EE551_Final_Project.git`

2. Go to folder `EE551_Final_Project/server`
3. Use conda create the environment `conda env create -f EE551_environment.yaml`
4. Activate the environment by using `conda activate EE551`
5. Install mongoDB 
6. Run seed file `python seed.py`
7. start server `python app.py`
8. go to floder`EE551_Final_Project/client/zhengli-ee551`
9. Run client server by using `npm start`
10. Go to `localhost:3000`