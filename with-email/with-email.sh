cp -n ./with-email/with-email.sample.sh ./with-email/with-email.hot.sh

while [ $(grep -c "<email here>" ./with-email/with-email.hot.sh) -gt 0 ]
do
	nano ./with-email/with-email.hot.sh
done

source ./with-email/with-email.hot.sh
