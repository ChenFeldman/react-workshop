import PropTypes from 'prop-types';

export const NEWS_PROP_TYPE = PropTypes.shape({
    id: PropTypes.number.isRequired,
    source: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fake: PropTypes.bool
});