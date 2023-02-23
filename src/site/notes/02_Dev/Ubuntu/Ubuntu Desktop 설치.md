---
title: "Ubuntu Desktop"
{"dg-publish":true,"permalink":"/02-dev/ubuntu/ubuntu-desktop/","tags":["gardenEntry"]}
---



1. ISO 파일 다운로드 후 설치용 USB 만들기 ([https://parkaparka.tistory.com/31](https://parkaparka.tistory.com/31))![2023-02-12_10-41-26 1.png](/img/user/03_Attached%20Files/2023-02-12_10-41-26%201.png)![2023-02-12_10-42-08.png](/img/user/03_Attached%20Files/2023-02-12_10-42-08.png)![2023-02-12_10-42-34.png](/img/user/03_Attached%20Files/2023-02-12_10-42-34.png)
2. USB 꽂고 BIOS모드 진입해서 부팅 우선순위 USB로 지정
3.  설치
4.  아이피 주소 확인 hostname -I
5.  방화벽 확인 (sudo) ufw status/끄기 ufw disable /켜기 uff enable
6.  Open SSH Server 설치 $ sudo apt update $ usdo apt install opens-server 설치 $ sudo systemctl status ssh 상태확인 $ sudo systemctl enable ssh $ sudo systemctl start ssh 실행중이 아닐 경우 실행 명령어
7.  호스트네임 확인 및 변경 ([](https://pinggoopark.tistory.com/86)[https://pinggoopark.tistory.com/86](https://pinggoopark.tistory.com/86))![2023-02-12_10-43-48.png](/img/user/03_Attached%20Files/2023-02-12_10-43-48.png)


#ubuntu #desktop #설치
