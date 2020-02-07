for file in ${HOME}/.runonce/*
do
    if [ ! -f "$file" ]
    then
        continue
    fi
    source "$file"
    mv "$file" "${HOME}/.ranonce/$file.$(date +%Y%m%dT%H%M%S)"
    logger -t runonce -p local3.info "$file"
done

mount | grep "${HOME}/google-drive" >/dev/null || /usr/bin/google-drive-ocamlfuse "${HOME}/google-drive"&
