<?php

/**
 * Prevent Direct Access
 *
 * @since 0.1
 */
defined('ABSPATH') or die("Restricted access!");

/**
 * Hello message - Bootstrap Modal
 *
 * @since 4.0
 */
function allmetatags_hello_message() {

    $options = get_option( 'allmetatags_settings' );

    if ( !empty($options) ) {
        return;
    }

    ?>
        <div id="hello-message" class="modal fade hello-message" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src="http://mycyberuniverse.com/public-files/images/Arthur.png">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <p><?php _e( 'Hello. I\'m Arthur, the author of this plugin.', ALLMT_TEXT ); ?></p>
                        <p><?php printf(
                                        __( 'Thank you for installing my plugin! I hope you will love it %s', ALLMT_TEXT ),
                                        '&#x1F603;'
                                        );
                            ?></p>
                    </div>
                </div>
            </div>
        </div>
        <script>
            jQuery(document).ready(function($) {
                  $("#hello-message").modal();
            });
        </script>
    <?php
}

/**
 * Error message (When the old version of plugin installed) - Bootstrap Modal
 *
 * @since 4.0
 */
function allmetatags_error_message() {

    $info = get_option( 'allmetatags_service_info' );
    $old_version = isset( $info['old_version'] ) && !empty( $info['old_version'] ) ? $info['old_version'] : '0';

    if ( $old_version != '1' ) {
        return;
    }

    ?>
        <div id="error-message" class="modal fade error-message" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <p><?php _e( 'You have installed an old version of this plugin.', ALLMT_TEXT ); ?></p>
                        <p><?php _e( 'Please update the plugin to the latest version, and all will be fine.', ALLMT_TEXT ); ?></p>
                    </div>
                </div>
            </div>
        </div>
        <script>
            jQuery(document).ready(function($) {
                $("#error-message").modal( {backdrop: "static", keyboard: false} );
            });
        </script>
    <?php
}
