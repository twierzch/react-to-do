const _idsCounters = {};

export function uniqueId( prefix ) {
    const counter = _idsCounters[ prefix ] || 0;
    _idsCounters[ prefix ] = counter + 1;

    return `${prefix}-${counter}`;
}
