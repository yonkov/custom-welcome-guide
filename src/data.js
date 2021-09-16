/**
 * Get all the guides using the WordPress rest api
 * @package Custom Welcome Guide
 * @since 1.0.0
 * @see https://developer.wordpress.org/rest-api/reference/
 */
import { useEffect, useState } from 'react';
import api from '@wordpress/api';
const restUrl = custom_welcome_guide_script_params.rest_url;
export const getPosts = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch( restUrl + 'wp/v2/guides?filter[orderby]=date&order=asc');
      const json = await response.json();
      setData(json);
    };
    getData();
  }, []);

  return data;
};

/* Get all the plugin Options */
export const pluginOptions = () => {
  const [ data, setData ] = useState({});
  useEffect(() => {
    api.loadPromise.then(() => {
      const settings = new api.models.Settings();
      if (!data.isAPILoaded) {
        settings.fetch().then((response) => {
          setData({
            isShowPost: response['cwg_options']['is_show_post'] ? response['cwg_options']['is_show_post'] : '',
            isShowPage: response['cwg_options']['is_show_page'] ? response['cwg_options']['is_show_page'] : '',
            isShowCPT: response['cwg_options']['is_show_cpt'] ? response['cwg_options']['is_show_cpt'] : '',
            isShowAdmin: response['cwg_options']['is_show_admin'] ? response['cwg_options']['is_show_admin'] : '',
            featuredPostId: response['cwg_options'][ 'featured_post_id' ] ? response['cwg_options'][ 'featured_post_id' ] : '',
            isAPILoaded: true,
          })
        });
      }
    });
  }, []);
  return data;
}