const Logo = ({variant = 'one', fillTextColor = '#00004B'}) => {
    return (
        <svg width="281px" height="60px" viewBox="0 0 281 60" version="1.1">
            <title>Time Dijital</title>
            <desc>Created with Sketch.</desc>
            <g id="Symbols"
               stroke="none"
               strokeWidth="1"
               fill="none"
               fillRule="evenodd">
                <g transform="translate(-315.000000, -40.000000)">
                    <g>
                        <g id="logo" transform="translate(315.000000, 40.000000)">
                            <text id="Keystroke-Startup-la"
                                  fontFamily="DMSans-Bold, DM Sans"
                                  fontSize="28"
                                  fontWeight="bold"
                                  fill={fillTextColor}>
                                <tspan x="75" y="24">Time Dijital</tspan>
                                <tspan
                                    x="175.14" y="24.5001221"
                                    fontFamily="DMSans-Regular, DM Sans"
                                    fontWeight="normal"
                                />
                                <tspan
                                    x="76.16" y="49.5001221"
                                    fontFamily="DMSans-Regular, DM Sans"
                                    fontSize="15"
                                    fontWeight="normal">
                                    {variant === 'two' ? 'Small agency studio' : 'Dijital Çözüm Ortağınız'}
                                </tspan>
                            </text>
                            
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default Logo;
