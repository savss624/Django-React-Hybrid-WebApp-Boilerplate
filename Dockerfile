FROM python:3.9-alpine3.13
LABEL maintainer="savss624"

ENV PYTHONUNBUFFERED 1
ENV APP_HOME $PWD

COPY . .

WORKDIR $APP_HOME
EXPOSE 8000

ARG DEV=false
RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    apk add --update --no-cache postgresql-client jpeg-dev && \
    apk add --update --no-cache --virtual .tmp-build-deps \
        build-base postgresql-dev musl-dev autoconf automake zlib zlib-dev linux-headers && \
    /py/bin/pip install -r requirements.txt && \
    if [ $DEV = "true" ]; \
        then /py/bin/pip install -r requirements.dev.txt ; \
    fi && \
    apk add --update --no-cache nodejs npm yarn && \
    yarn install --frozen-lockfile && \
    rm requirements*.txt && \
    apk del .tmp-build-deps && \
    adduser \
        --disabled-password \
        --no-create-home \
        local-user && \
    mkdir -p /vol/web/mediafiles && \
    mkdir -p /vol/web/staticfiles && \
    chown -R local-user:local-user /vol && \
    chmod -R 755 /vol && \
    chmod -R +x /scripts

ENV PATH="/scripts:/py/bin:$PATH"
ENV NODE_PATH="/node_modules/.bin:$NODE_PATH"

USER local-user

CMD ["run.sh"]