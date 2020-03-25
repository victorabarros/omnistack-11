docker rm -f omnistack11
docker rmi -f omnistack11-image:v1

echo "  ___    _    _   _   _      ___   "
echo " | _ \  | |  | | | | | |    |   \\ "
echo " |   /  | |  | | | | | |    | |\ \\"
echo " | _ \  | |__| | | | | |__  | |/ / "
echo " |___/   \____/  |_| |____| |___/  "

docker build -t omnistack11-image:v1 .
# docker run -it --env-file=${PWD}/.env --rm -v ${PWD}:/src --name omnistack11 omnistack11-image:v1 bash
# docker run --env-file=${PWD}/.env -p 3333:3333 --name omnistack11 omnistack11-image:v1
docker run -it --env-file=${PWD}/.env --name omnistack11 omnistack11-image:v1 bash
