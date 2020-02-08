# Mount Google drive if not mounted
mount | grep "${HOME}/google-drive" >/dev/null || /usr/bin/google-drive-ocamlfuse "${HOME}/google-drive"&

for file in ${HOME}/.runonce/*
do
    if [ ! -f "$file" ]
    then
        continue
    fi
    source "$file"

	mv "$file" "${file/runonce/ranonce}.$(date +%Y%m%dT%H%M%S)"
    logger -t runonce -p local3.info "$file"
done >/dev/null 2>&1

# Clean up unused tmux plugins and updated existing ones.
${HOME}/.tmux/plugins/tpm/bin/clean_plugins
${HOME}/.tmux/plugins/tpm/bin/update_plugins all
